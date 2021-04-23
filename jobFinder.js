const form = document.getElementById('form');
const username = document.getElementById('Full Name');
const age = document.getElementById('age');
const gender=document.getElementById('Gender');
const male = document.getElementById('Male');
const female = document.getElementById('Female');
const Qualification = document.getElementById('Qualification');
const AboutYourself = document.getElementById('About-Yourself');
const upload = document.getElementById('file');


//======================================================================
//=========== Error function ===========================================
//======================================================================

function showError(input,massage) {
    const form = input;
    if(form==Qualification){
         form.className='Quasucess error';
     }   
     if(form==AboutYourself){
         form.className='self error';
     }  
    if(form==upload){
         form.className='file error';
     }  

    const formControl=form.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=massage;
}

//=======================================================================
//======== Sucess function ==============================================
//=======================================================================

function showSucess(input) {
    const form = input;
     if(form==Qualification){
         form.className='Quasucess sucess';
     }    
     if(form==AboutYourself){
         form.className='self sucess';
     }  
    if(form==upload){
         form.className='file sucess';
     }  

     const formControl=form.parentElement;
     formControl.className='form-control sucess';
}


//=============================================================================================
//====== check Age ============================================================================
//=============================================================================================

function checkAge(input){
var age=input.value;
        if(age==0)
          { showError(input,`Age is required`);
            return false;
          }
        else if(age < 18 || age > 60)
           { showError(input,`${getFieldName(input)} must be greater than 18 or less than 60`);
             return false;
           }
        else
          {  showSucess(input);
             return true;
          }
    
}


//=======================================================================
//======= getFieldName function =========================================
//=======================================================================


function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//=======================================================================
//======= check Length ==================================================
//=======================================================================

function checkLength(input,min,max) {
    
    if(input.value.length==0)
    {showError(input,`${getFieldName(input)} is required`);
     return false;
    }
    else if(input.value.length < min) {
         showError(input,`${getFieldName(input)} must be atleast ${min} character`);
          return false;
        
     } else if (input.value.length > max) {
         
             showError(input,`${getFieldName(input)} must be less than ${max} character`);
             return false;
     } else {
         showSucess(input);
         return true;
     } 
}

//========================================================================
//===== check Gender =====================================================
//========================================================================

function checkGender(input1,input2) {
   // console.log(input1.checked);
   //console.log(input2.checked);
    if(input1.checked== false && input2.checked== false){
        showError(gender,'please choose any one option');
        return false;
    }
    else
       { showSucess(gender);
         return true;
       }
}

//========================================================================
//====== check Qualification ============================================= 
//========================================================================

function checkQualification(input){
    if(input.value=="")
        { showError(input,`${getFieldName(input)} is required`);
          return false;
        }
    else
        { showSucess(input);
          return true;
        }
    
}

//========================================================================
//========= Check About Youself ==========================================
//========================================================================

function checkYourself(input){
    if(input.value.length==0) 
      {  showError(input,`About Yourself is required`);
         return false;
      }
    else if(input.value.length>0&&input.value.length<=19){
       { showError(input,`write atleast 20 character`);
         return false;
       }
    }
    else
       { showSucess(input);
         return true;
       }
}

//========================================================================
//======= File validation ================================================
//========================================================================

function checkFile(input){
    var filepath=input.value;
    var allowedExtension=/(\.doc|\.docx|\.pdf)$/i;
    
    if(filepath=="")
      { showError(input,`please upload your CV`);
        return false;
      }
    
    else if(!allowedExtension.exec(filepath)){
        showError(input,`please upload only doc,docx,pdf file`);
         return false;
    }
    else{
        showSucess(input);
        return true;
    }
}

//========================================================================
//======= EventListner for submit  button ================================
//========================================================================

form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkLength(username,3,25);
    checkAge(age);
    checkGender(male,female);
    checkQualification(Qualification);
    checkYourself(AboutYourself);
    checkFile(upload);
    
    if(checkLength(username,3,25)!=false)
      {if(checkAge(age)!=false)
        { if(male.checked!=false || female.checked!=false)
           { if(checkYourself(AboutYourself)!=false)
              { if(checkQualification(Qualification)!=false)
                  { if(checkFile(upload)!=false)
                   location.reload();
                 }  
              }
           }
        }
      }
      
});


//=========================================================================
//=========== EventListner onChange =======================================
//=========================================================================

username.addEventListener('change',(event)=>{
    checkLength(username,3,25);
});

age.addEventListener('change',(event)=>{
    checkAge(age);
});

gender.addEventListener('change',(event)=>{
    checkGender(gender);
});

Qualification.addEventListener('change',(event)=>{
    checkQualification(Qualification);
});

AboutYourself.addEventListener('change',(event)=>{
    checkYourself(AboutYourself);
});

upload.addEventListener('change',(event)=>{
    checkFile(upload);
});
  
//==============================================================================
//=================== END ======================================================
//==============================================================================