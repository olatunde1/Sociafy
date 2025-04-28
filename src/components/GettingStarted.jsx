import { FaUserPlus, FaCheckCircle, FaCreditCard, FaKey } from "react-icons/fa";
import IconCreateAccount from '../assets/images/create-account-icon.png'
import IconChooseAccount from '../assets/images/choose-account-icon.png'
import IconMakePayment from '../assets/images/make-payment-icon.png'
import IconReceivePayment from '../assets/images/receive-payment-icon.png'
import Secure from '../assets/images/secure-transaction.png'
import Verified from '../assets/images/verified-accounts.png'
import Instant from '../assets/images/instant-delivery.png'

const steps = [
  {
    // icon: <FaUserPlus className="text-blue-500 text-4xl" />,
    image: IconCreateAccount,
    title: "Create Account",
    description: "Register on Sociafy using a valid information."
  },
  {
    image: IconChooseAccount,
    title: "Choose an Account",
    description: "Choose from our verified social media account that suits you."
  },
  {
    image: IconMakePayment,
    title: "Make Payment",
    description: "Pay securely using your preferred payment method."
  },
  {
    image: IconReceivePayment,
    title: "Receive your Login Instantly",
    description: "Receive the account credentials immediately after payment."
  }
];


// const whyChoose = [
 
//         {
//           icon: <FaUserPlus className="text-blue-500 text-4xl" />,
//           image: {IconCreateAccount},
//           title: "Secure Transactions",
//           description: "We use encrypted payment gateways to ensure all transactions are safe and fraud-proof."
//         },
//         {
//           image: {IconChooseAccount},
//           title: "Verified Accounts",
//           description: "Every account listed is pre-checked to ensure authenticity and legitimacy before being sold."
//         },
//         {
//           image: {IconMakePayment},
//           title: "Make Payment",
//           description: "Pay securely using your preferred payment method."
//         },
//         {
//           image: {IconReceivePayment},
//           title: "Receive your Login Instantly",
//           description: "Receive the account credentials immediately after payment."
//         }
      
// ];

export default function GetStarted() {
  return (<>
  <div className="mx-auto text-center py-12 mt-20">
  <h2 className="text-3xl font-bold mb-8">
    Get Started in <span className="text-[#7B36E7]">4 Easy Steps</span>
  </h2>

  {/* Centered Responsive Grid Layout */}
  <div className="flex justify-center flex-wrap gap-8 ">
    {steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-white max-w-[255px] cursor-pointer w-full transform transition-transform duration-300 hover:scale-105">
        <img src={step.image} alt={step.title} height="50px" width="50px" className="mb-4" />
        <h3 className="text-lg font-semibold">{step.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{step.description}</p>
      </div>
    ))}
  </div>
</div>


    
    <div className="container mx-auto px-4 w-full max-w-[1199px] why-choose-sociafy mt-20">
        <h1 className="text-center font-extrabold font-custom text-3xl md:text-4xl">
            Why Choose <span className="text-[#7B36E7]">Sociafy</span>
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-8">
            
            {/* Secure Transactions Card */}
            <div className="max-w-[373px] w-full bg-[#EBE1FB] px-10 pt-10 rounded-4xl text-center md:text-left">
                <h1 className="font-semibold text-2xl font-Urbanist mb-4">Secure Transactions</h1>
                <p className="font-medium leading-6 text-[#515151]">
                    We use encrypted payment gateways to ensure all transactions are safe and fraud-proof.
                </p>
                <img src={Secure} alt="Secure Transactions" className="max-w-full mx-auto md:mx-0 mt-4" />
            </div>

            {/* Verified Accounts Card */}
            <div className="max-w-[373px] w-full px-10 pt-10 rounded-4xl bg-[#DDEFFB] text-center md:text-left">
            <h1 className="font-semibold text-2xl font-Urbanist mb-4">Verified Accounts</h1>
            <p className="font-medium leading-6 text-[#515151]">
                Every account listed is pre-checked to ensure authenticity and legitimacy before being sold.
            </p>
            <img src={Verified} alt="Verified Accounts" className="max-w-full mx-auto md:mx-0 mt-4" />
            </div>

            {/* Instant Delivery Card */}
            <div className="max-w-[373px] w-full px-10 pt-10 rounded-4xl bg-[#DDF1E2] text-center md:text-left">
            <h1 className="font-semibold text-2xl font-Urbanist mb-4">Instant Delivery</h1>
            <p className="font-medium leading-6 text-[#515151]">
                Get your account details immediately after a successful purchase – no delays, no hassle.
            </p>
            <img src={Instant} alt="Instant Delivery" className="max-w-full mx-auto md:mx-0 mt-4" />
            </div>

  </div>
</div>


  </>
    
  );
}
