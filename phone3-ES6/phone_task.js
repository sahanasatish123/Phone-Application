  // Select divs
//   let phone_type;
// import {
//     Single,
//     Dual,
//     IOS,
//     Android,
//     WindowsPhone
//   } from "./phone_classes.js"; 
const screen=document.querySelector(".container")
const inputs = document.querySelector(".inputs");
const heading=document.querySelector("h2")
const basic_phone_types = document.querySelector(".basic-phone-types");
const smart_phone_types = document.querySelector(".smart-phone-types");

const save_details = document.getElementById("save-details");
const phone_catagory_div = document.querySelector(".phone-category-div");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back=document.querySelector(".back")
const end_result=document.querySelector(".end-result")


const single = document.querySelectorAll(".single");
const dual=document.querySelectorAll(".dual")
const android=document.querySelectorAll(".android")
const ios=document.querySelectorAll(".ios")
const windows=document.querySelectorAll(".windows")


        

const input = document.querySelectorAll(".input");
const functions=document.getElementById("functions")

const function_inputs=document.querySelector(".function-inputs")
const functionInputFields=document.querySelectorAll("function-input-field")
const call_inputs=document.querySelector(".call-inputs")
const message_inputs=document.querySelector(".message-inputs")
const mail_inputs=document.querySelector(".mail-inputs")
const duo_inputs=document.querySelector(".duo-inputs")
const facetime_inputs=document.querySelector(".facetime-inputs")
const skype_inputs=document.querySelector(".skype-inputs")



    const phone_1=document.getElementById("Phone-1")
    const phone_2=document.getElementById("Phone-2")
    const emailid=document.getElementById("emailid")
    const duoid=document.getElementById("duoid")
    const faceid=document.getElementById("faceid")
    const skypeid=document.getElementById("skypeid")

    const call=document.getElementById("call")
    const message=document.getElementById("message")
    const email=document.getElementById("email")
    const face_time=document.getElementById("face-time")
    const duo_call=document.getElementById("duo-call")
    const skype=document.getElementById("skype")


    const proceed_call=document.querySelector(".proceed-call")
    const proceed_message=document.querySelector(".proceed-message")
    const proceed_mail=document.querySelector(".proceed-mail")
    const proceed_duocall=document.querySelector(".proceed-duocall")
    const proceed_facetime=document.querySelector(".proceed-facetime")
    const proceed_skypecall=document.querySelector(".proceed-skypecall")


    const subject=document.getElementById("subject")
    const body=document.getElementById("body")
    const reciever_no=document.getElementById("reciever-no")
    const msg_reciever_no=document.getElementById("msg-reciever-no")
    const message_content=document.getElementById("message-content")
    const reciever_mailid=document.getElementById("reciever-mailid")
    const reciever_duo_id=document.getElementById("reciever-duo-id")
    const reciever_facetime_id=document.getElementById("reciever-facetime-id")
    const reciever_skype_id=document.getElementById("reciever-skype-id")
const reciever_details=[reciever_no,msg_reciever_no,message_content,reciever_mailid,reciever_duo_id,reciever_facetime_id,reciever_skype_id]
const call_sim=document.getElementById("call-sim")
const msg_sim=document.getElementById("msg-sim")


    const result=document.querySelector(".result")

    let phone_catagory;
    let category;
    let phones={}
            phones.Single=single
            phones.Dual=dual
            phones.Android=android
            phones["IOS"]=ios
            phones.Windows=windows
            let obj;


const showOnly=(ph_type)=>{
    input.forEach((each) => {
        if (!Array.from(ph_type).includes(each)) {
            hide(each);
            // each.classList.add("visible");
        } 
        // else {
        //     // each.classList.remove("visible");
        //     // each.classList.add("hide");
        //     hide(each)
        // }
    });
}

const show=(...elements)=>{
    elements.forEach(each=>each.classList.remove("hide"))
}
const hide=(...elements)=>{
    elements.forEach(each=>each.classList.add("hide"))
}



next1.addEventListener("click",()=>{
    // next1.classList.add("hide");
    // next2.classList.remove("hide");

    phone_catagory = document.querySelector("input[name='phone-category']:checked").value;
    // phone_catagory_div.classList.add("hide");

    hide(next1,phone_catagory_div)
    show(next2)
//change
    heading.textContent=`Select ${phone_catagory}Phone Type`;

(phone_catagory==="Basic" ? basic_phone_types : smart_phone_types)
    .classList.remove("hide");
    
    heading.focus()


});

next2.addEventListener("click",()=>{
    // next2.classList.add("hide");
    // basic_phone_types.classList.add("hide");
    // smart_phone_types.classList.add("hide");
    // inputs.classList.remove("hide");

    hide(next2,basic_phone_types,smart_phone_types)
    show(inputs)
    heading.textContent="Enter Details"
    heading.focus()
    //CHANGE
    category = document.querySelector(`input[name='${phone_catagory}-category']:checked`).value;
    console.log(category)
    showOnly(phones[category])
    
});

save_details.addEventListener("click",  ()=>{
    
  
    let phone1_number = phone_1.value;
    let phone2_number = phone_2.value;
    let email_id = emailid.value;
    let face_id = faceid.value;
    let duo_id = duoid.value;
    let skype_id = skypeid.value;

   

    switch (category) {
        case "Single":
          if(!phone1_number){
              return
          }
            obj = new Single(phone1_number);
            break;
        case "Dual":
          if(!phone1_number||!phone2_number){
              return
          }
            obj = new Dual(phone1_number, phone2_number);
            show(msg_sim,call_sim)
            break;
        case "Android":
          if(!phone1_number||!email_id||!duo_id)
          {return}
            obj = new Android(phone1_number, email_id, duo_id);
            break;
        case "IOS":
          if(!phone1_number||!email_id||!face_id){
              return
          }
            obj = new IOS(phone1_number, email_id, face_id);
            break;
        case "Windows":
          if(!phone1_number||!email_id||!skype_id){
              return
          }
            obj = new WindowsPhone(phone1_number, email_id, skype_id);
            break;
    }
    heading.textContent="Perform Function"
    heading.focus()
    // inputs.classList.add("hide");
    // functions.classList.remove("hide");

    show(functions)
    hide(inputs)
    console.log(obj);
    heading.focus()
});

const showFunctionInputs=(inputElement)=>{
    // functions.classList.add("hide");
    // function_inputs.classList.remove("hide");
    // inputElement.classList.remove("hide");
    hide(functions)
    show(function_inputs,inputElement)
}

[call,message,email,face_time,duo_call,skype].forEach((each)=>{
    each.addEventListener("click",()=>{

        back.classList.remove("hide")
        heading.textContent="Enter function Input"
    heading.focus()

})
})



call.addEventListener("click",()=>{
    showFunctionInputs(call_inputs);
    // if(category=="Dual"){
    //   call_sim.setAttribute("class","visible")
    // }
});

message.addEventListener("click",()=>{
    showFunctionInputs(message_inputs);
    // if(category=="Dual"){
    //   msg_sim.setAttribute("class","visible")
    // }
});

email.addEventListener("click",()=>{
    showFunctionInputs(mail_inputs);
});

face_time.addEventListener("click",()=>{
    showFunctionInputs(facetime_inputs);
});

duo_call.addEventListener("click",()=>{
    showFunctionInputs(duo_inputs);
});

skype.addEventListener("click",()=>{
    showFunctionInputs(skype_inputs);
});


// function show(...elements){
//     elements.forEach(each=>each.classList.remove("hide"))
// }
// function hide(...elements){
//     elements.forEach(each=>each.classList.add("hide"))
// }


proceed_call.addEventListener("click",()=>{
    if (!reciever_no.value) {
        return;
    }
    result.textContent = obj.call(reciever_no.value,call_sim.value);
    // end_result.classList.remove("hide");
    // function_inputs.classList.add("hide");
    show(end_result)
    hide(function_inputs)
    heading.textContent="Function performed"
    heading.focus()
});

proceed_message.addEventListener("click",()=>{
    if (!msg_reciever_no.value || !message_content.value) {
        return;
    }
    result.textContent = obj.message(msg_reciever_no.value, message_content.value,msg_sim.value);
    show(end_result)
    hide(function_inputs)
    heading.textContent="Function performed"
    heading.focus()
});

proceed_mail.addEventListener("click",()=>{
    if (!reciever_mailid.value || !subject.value || !body.value) {
        return;
    }
    result.textContent = obj.email(reciever_mailid.value, subject.value, body.value);
    show(end_result)
    hide(function_inputs)
    heading.textContent="Function performed"
    heading.focus()
});

proceed_duocall.addEventListener("click",()=>{
    if (!reciever_duo_id.value) {
        return;
    }
    result.textContent = obj.duo(reciever_duo_id.value);
    show(end_result)
    hide(function_inputs)
    heading.textContent="Function performed"
    heading.focus()
});

proceed_facetime.addEventListener("click",()=>{
    if (!reciever_facetime_id.value) {
        return;
    }
    result.textContent = obj.facetime(reciever_facetime_id.value);
    show(end_result)
    hide(function_inputs)
    heading.textContent="Function performed"
    heading.focus()
});

proceed_skypecall.addEventListener("click",()=>{
    if (!reciever_skype_id.value) {
        return;
    }
    result.textContent = obj.skype(reciever_skype_id.value);
    show(end_result)
    hide(function_inputs)
    heading.textContent="Function performed"
    heading.focus()
});


// [proceed_call,proceed_duocall,proceed_facetime,proceed_mail,proceed_message,proceed_skypecall].forEach((Each)=>{
//     Each.addEventListener("click",()=>{
     
        
//         end_result.classList.remove("hide")
//       //   end_result.classList.add("visible")
//         function_inputs.classList.add("hide");
//       })
//   })

back.addEventListener("click",()=>{
//   functions.classList.remove("hide")
//   functions.classList.add("visible")
  Array.from(function_inputs.children).forEach((node)=>node.classList.add("hide"))
//   end_result.classList.remove("visible")
//   end_result.classList.add("hide")
  functionInputFields.forEach(each=>{each.value=""})
//   result.textContent=""
//   reciever_no.value=""
//   msg_reciever_no.value=""
//   message_content.value=""
//   reciever_mailid.value=""
//   subject.value=""
//   body.value=""
//   reciever_duo_id.value=""
//   reciever_facetime_id.value=""
//   reciever_skype_id.value=""
  reciever_details.forEach(ele=>ele.value="")
//   back.classList.add("hide")
  show(functions)
  hide(end_result,back)
//   back.classList.remove("visible")
call_sim.value=""
msg_sim.value=""
heading.textContent="Perform Function"
    heading.focus()
}) 
