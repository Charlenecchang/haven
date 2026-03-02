import React from 'react';

export default function LandingPage(){
    return(
        <div style={{padding: 20}}>
            <h1 class="text-2xl font-bold">Haven</h1><br></br>
            <p class="text-sm">One stop resource hub for Amara&apos;s license caregivers.</p>
            <section>
                <br></br>
                <p class="text-sm italic">&quot;Quote from user interviews, user pain points.&quot;</p>
                <br></br>
                <ol class="text-sm"> Our key features:
                    <li>1. Dashboard: Navigating you the right support. Help navigate your caregiving journey by curating personalize resource recommendation.</li>
                    <li>2. Staff Directory: Provide transparent access to Amara staff and program personnel.</li>
                    <li>3. Support Groups: Sign up for support groups activities in your area.</li>
                </ol>
                <br></br>
                <p class="text-base font-bold">Free Resources, login today to access all features!</p><br></br>
                <div class="dashboard-login-container">
                    <p>Please input your account and password below/Google OAuth verifications</p>
                    <p>Account:</p>
                    <p>Password:</p>
                    <button>Sign In</button>
                </div>
            </section>
        </div>
    )
}