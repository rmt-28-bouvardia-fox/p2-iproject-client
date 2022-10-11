<script>

</script>

<template>
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
            <RouterLink class="nav-link active" id="tab-login" data-mdb-toggle="pill" to="" role="tab"
                aria-controls="pills-login" aria-selected="false">Login</RouterLink>
        </li>
        <li class="nav-item" role="presentation">
            <RouterLink class="nav-link" id="tab-register" data-mdb-toggle="pill" to="register" role="tab"
                aria-controls="pills-register" aria-selected="true">Register</RouterLink>
        </li>
    </ul>
    
    <section>
        <div class="container">
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <div class="text-center mb-3">
                    <p>Sign in with:</p>
                </div>
    
                <div class="text-center mb-3">
                    <!-- <GoogleLogin :callback="handleCredentialResponse" /> -->
                </div>
    
                <p class="text-center">or:</p>
    
                <form >
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <input type="email" id="loginName" class="form-control" />
                        <label class="form-label" for="loginName">Email</label>
                    </div>
    
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <input type="password" id="loginPassword"  class="form-control" />
                        <label class="form-label" for="loginPassword">Password</label>
                    </div>
    
                    <!-- 2 column grid layout -->
                    <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                            <!-- Submit button -->
                            <!-- <Button :variant="'btn btn-primary'" :name="'Log In'" :type="'submit'"></Button> -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

