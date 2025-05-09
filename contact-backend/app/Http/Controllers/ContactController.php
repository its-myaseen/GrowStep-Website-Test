<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendContact(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string',
            'email'   => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        Mail::raw("Message from: {$validated['name']}\n\nEmail: {$validated['email']}\n\nSubject: {$validated['subject']}\n\nMessage:\n{$validated['message']}", function ($message) use ($validated) {
            $message->to('msameerprogrammer@gmail.com')
                    ->subject("New Contact Form Submission: {$validated['subject']}");
        });

        return response()->json(['message' => 'Email sent successfully']);
    }
}
