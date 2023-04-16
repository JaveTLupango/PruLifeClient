@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => ''])
Click Here!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
