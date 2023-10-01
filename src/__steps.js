/*
***<-------- INITIAL SETUP --------->***


 1 . visit : console.firebase.google.com 
 2.create project (skip google analytics)
 3 .Register app (create config)
 4.install firebase : npm install firebase 
 5.add config to your projects 
 6. DANGER : Do not publish or make firebase config to public by pushing those to github .


***<----------INTEGRATION ---------->***


 7. Go to Docs > Build > Authentication > Web > Get Started ;
 8.Export app from the firebase.config.js file : export default app ;
 9. login.jsx : import getAuth from firebase/auth ;
 10.create const auth =getAuth(app) 

 ***--------- PROVIDER SETUP -------------***

 11. Import GoogleAuthProvider and create a new provider ;
 12.use signInWithPopup and pass auth and provider
  13. activate sign in method (google , twitter ,github etc)
  14. [vite] change to local host 

  <---------More Auth Provider---------->
  1.activate the auth provider (create app ,provider , redirect url , client id ,client secret)
*/ 