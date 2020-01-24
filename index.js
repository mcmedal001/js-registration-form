function validateForm()
      {
      
         if( document.regForm.firstname.value == "" )
         {
            alert( "Please enter a First Name!" );
            document.regForm.firstname.focus() ;
            return false;
         }

          if( document.regForm.lastname.value == "" )
         {
            alert( "Please enter a Last Name!" );
            document.regForm.lastname.focus() ;
            return false;
         }

         if( document.regForm.dob.value == "" )
         {
            alert( "You must choose a date!" );
            document.regForm.dob.focus() ;
            return false;
         }
         
         if( document.regForm.email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.regForm.email.focus() ;
            return false;
         }
         
         if( document.regForm.postcode.value == "" ||
         isNaN( document.regForm.postcode.value ) ||
         document.regForm.postcode.value.length != 6 )
         {
            alert( "Please provide a zip in the format ######: e.g 100234" );
            document.regForm.postcode.focus() ;
            return false;
         }
         
         return( true );
      }