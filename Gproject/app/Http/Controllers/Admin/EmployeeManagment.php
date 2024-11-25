<?php

namespace App\Http\Controllers\Admin;
use App\Models\Admin;
use App\Models\Inventory;
use App\Models\Products;
use Illuminate\Support\Facades\DB;
use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmployeeManagment extends Controller
{

    public function index(){
        return view('AdminView/ManageEmployee');
    }

    public function addEmployee(Request $request){

        $validateData=$request->validate([
            'name' =>  'required|string|max:255',
            'username'=> 'required|string|max:255|unique:employees,username',
            'password'=> 'required|max:255|unique:employees,password',
            'phone'=> 'required|string|max:255|unique:employees,phone',
            'gender'=>'required',
            'email'=>'required',
            
        ]);

        $admin = new Admin();

        $admin->name=$validateData['name'];
        $admin->username=$validateData['username'];
        $admin->password=$validateData['password'];
        $admin->phone=$validateData['phone'];
        $admin->gender=$validateData['gender'];
        $admin->email=$validateData['email'];

        $admin->save();
        
        return redirect()->back();

    }


    public function editEmployee(Request $request)
    {
        $validatedData = $request->validate([
            'userID' => 'required|exists:employees,employee_id',
            'name' => 'nullable|string|max:255',
            'username' => 'nullable|string|max:255|unique:employees,username,' . $request->userID . ',employee_id',
            'password' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255|unique:employees,phone,' . $request->userID . ',employee_id',
            'email' => 'nullable|string|email|max:255',
        ]);

        $em_id = $validatedData['userID'];
        $updateData = [];

        if (!empty($validatedData['name'])) {
            $updateData['name'] = $validatedData['name'];
        }
        if (!empty($validatedData['username'])) {
            $updateData['username'] = $validatedData['username'];
        }
        if (!empty($validatedData['password'])) {
            $updateData['password'] = Hash::make($validatedData['password']); 
        }
        if (!empty($validatedData['phone'])) {
            $updateData['phone'] = $validatedData['phone'];
        }
        if (!empty($validatedData['email'])) {
            $updateData['email'] = $validatedData['email'];
        }

       
        if (!empty($updateData)) {
            $updated = DB::table('employees')
                ->where('employee_id', $em_id)
                ->update($updateData);

            if (!$updated) {
                return redirect()->back()->with('error', 'Failed to update the employee. Please try again.');
            }

            return redirect()->back()->with('success', 'Employee updated successfully!');
        }

        return redirect()->back()->with('info', 'No changes were made to the employee.');
    }

    public function deleteemployee(Request $request){
        $validatedData = $request->validate([
            'userID' => 'required|exists:employees,employee_id',
        ]);
    
        $em_id = $validatedData['userID'];
    
        $deleted = DB::table('employees')
                    ->where('employee_id', $em_id)
                    ->delete();
    
       
        if ($deleted) {
            
        } else {
           
        }

    }
}
