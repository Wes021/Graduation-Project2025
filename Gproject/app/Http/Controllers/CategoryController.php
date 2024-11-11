<?php

namespace App\Http\Controllers;

use App\Models\CategoryApp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function getOptions(Request $request){
        $categories=CategoryApp::all();

        return view('appointment', compact('categories'));
    }
}
