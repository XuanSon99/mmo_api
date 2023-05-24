<?php

namespace App\Http\Controllers;

use App\Models\TelegramAdmin;
use Illuminate\Http\Request;
use Validator;

class TelegramAdminController extends Controller
{
    public function isAdmin(Request $request)
    {
        $username = $request->route('username');
        $user = TelegramAdmin::orderBy('created_at', 'DESC')->where('username', $username)->first();
        if($user){
            return true;
        }
        return false;
    }
}
