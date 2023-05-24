<?php

namespace App\Http\Controllers;

use App\Models\Admintele;
use Illuminate\Http\Request;
use Validator;

class AdminteleController extends Controller
{
    public function isAdmin(Request $request)
    {
        $username = $request->route('username');
        $user = Admintele::orderBy('created_at', 'DESC')->where('username', $username)->first();
        if($user){
            return true;
        }
        return false;
    }
}
