@extends('layouts.app')

@section('content')
<navbar></navbar>
<section class="main-content columns is-fullheight">
    <div class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <sidebar></sidebar>
    </div>
    <div class="container column is-10">
        <container></container>
    </div>
</section>
@endsection
