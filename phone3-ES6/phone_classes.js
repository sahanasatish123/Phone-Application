
// Parent class
class Phone{
    constructor(phone_number) {
        this.phone_number = phone_number;
      }

      message(receiver_number, message)
      {
        return`Sending: ${message} to ${receiver_number} from ${this.phone_number}`
      };
    call(receiver_number)
    {
        return `Calling ${receiver_number} from ${this.phone_number}`;
    }
}

class Basic extends Phone{
    constructor(phone_number){
        super(phone_number)
    }
}

class Single extends Basic{
    constructor(phone_number){
        super(phone_number)
    }

}


class Dual extends Basic{
    constructor(phone1_number,phone2_number){
        super(phone1_number)
        this.phone_sim2=phone2_number
    }
    call(receiver_number,sim) {
        
      if (sim == 2) {
        [this.phone_number,this.phone_sim2]=[this.phone_sim2,this.phone_number]
        let result_str=super.call(receiver_number);
        [this.phone_number,this.phone_sim2]=[this.phone_sim2,this.phone_number]
        return result_str
      }
      return super.call(receiver_number);
    };
    message(receiver_number, message,sim) {

      if (sim == 2) {
        [this.phone_number,this.phone_sim2]=[this.phone_sim2,this.phone_number]
         let result_str=super.message(receiver_number, message);
         [this.phone_number,this.phone_sim2]=[this.phone_sim2,this.phone_number]
        return result_str
      }
      return super.message(receiver_number, message);
    };
}


class SmartPhone extends Phone{
    constructor(phone_number, emailid) {
        super(phone_number);
        this.emailid = emailid;
      }

     email(to_emailid, subject, body) {
        return `Sending mail to ${to_emailid} from ${this.emailid} with subject: ${subject} and body: ${body}`;
      };
}

class IOS extends SmartPhone{
    constructor(phone_number, emailid, facetimeid) {
        super(phone_number, emailid);
        this.facetimeid = facetimeid;
      }
    facetime(to_facetimeid) {
        return `Calling ${to_facetimeid} from ${this.facetimeid} via FaceTime`;
      };
      
}

class Android extends SmartPhone{
    constructor(phone_number, emailid, duoid) {
        super(phone_number, emailid);
        this.duoid = duoid;
      }
    duo(to_duoid) {
        return `Calling ${to_duoid} from ${this.duoid} via Duo`;
      };
}

class WindowsPhone extends SmartPhone{
    constructor(phone_number, emailid, skypeid) {
        super(phone_number, emailid);
        this.skypeid = skypeid;
      }
    skype(to_skypeid) {
        return `Calling ${to_skypeid} from ${this.skypeid} via Skype`;
      };
}

// export {
//   Single,
//   Dual,
//   IOS,
//   Android,
//   WindowsPhone
// };


