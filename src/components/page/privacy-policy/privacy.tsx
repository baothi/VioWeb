// FAQs.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type PrivacyType = {
  title: string;
  content: string;
};

const privacyTerms: PrivacyType[] = [
    {
        title: "",
        content: `<h4><b>Last updated November 2, 2022</b></h4>
                    <p>This privacy notice for PrismTech, Inc (<b>"Company," "we," "us,"</b> or <b>"our"</b>), describes how and why we might collect, store, use, and/or share <b>("process")</b> your information when you use our services <b>("Services")</b>, such as when you:</p>
                    <ul>
                        <li>Download and use our mobile application (Vio), or any other application of ours that links to this privacy notice</li>
                        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                    </ul>
                    <p><b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a><u>contact@prismtechinc.io.</u></a></p>`
    },
    {
        title: "SUMMARY OF KEY POINTS",
        content: `<p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
                  <p><b>What personal information do we process?</b> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with PrismTech, Inc and the Services, the choices you make, and the products and features you use.</p>
                  <p><b>Do we process any sensitive personal information?</b> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
                  <p><b>Do we receive any information from third parties?</b> We do not receive any information from third parties.</p>
                  <p><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
                  <p><b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties.</p>
                  <p><b>How do we keep your information safe?</b> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
                  <p><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                  <p><b>How do you exercise your rights?</b> The easiest way to exercise your rights is by contacting us via <a><u>contact@prismtechinc.io.</u></a> We will consider and act upon any request in accordance with applicable data protection laws.</p>
                  `
    },
    {
        title: "1. WHAT INFORMATION DO WE COLLECT?",
        content: `<p>Personal information you disclose to us</p>
                  <p><b>In Short:</b> We collect personal information that you provide to us.</p>
                  <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                  <p>Our Services have optional features which, if used by you, require us to collect additional information to provide such features. You will be notified of such collection, as appropriate. If you choose not to provide the information needed to use a feature, you will be unable to use the feature. For example, you cannot share your events with your contacts if you do not permit us to collect your Contact List data from your device. Permissions can be managed through your Settings menu on both Android and iOS devices.</p>
                  <p><b>Personal Information Provided by You.</b> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                  <ul>  
                    <li>Names</li>
                    <li>Phone numbers</li>
                    <li>Email addresses</li>
                    <li>Photos and videos</li>
                  </ul>
                  <p><b>Sensitive Information.</b> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
                  <ul>
                    <li><b>Contacts List (Phonebook).</b> To display your contact list to you in the Vio App, allow Vio App to access your contacts list data. Vio collects contacts list data to show the contact list onscreen for you to invite your contacts to events & to use the Vio App. In addition, we upload your contacts list data to our server to collate and display a list of your contacts who are already Vio users.</li>
                    <li><b>Contact Upload.</b> Contact upload is an optional feature that allows us to check which of your contacts in your device's address book are also Vio users. It also means we can update your Vio contact list when your contacts who aren't using Vio yet sign up later. We care about your privacy and we don't share your contact list with any other third party companies for their own use, even when they provide us with services. When you use contact upload and grant Vio access to your device address book, Vio will access and upload the phone numbers in your address book typically daily, but this depends on various factors including how often a user uses Vio, including those of Vio users and your other contacts. We don’t collect any of the other information that could appear in your device address book including names, email addresses, etc. If any of your contacts aren’t yet using Vio, we protect their privacy by managing the phone number in a way that is designed to prevent those contacts from being identified by Vio. We do this by creating a cryptographic hash value of their phone number, and then delete the number. Each cryptographic hash value is stored on Vio's servers, linked to the Vio users who uploaded the corresponding phone numbers before they were hashed so that we can more efficiently connect you with these contacts when they join Vio. You can control the contact upload feature from your device-based settings. If you choose not to use Contact Upload you can still communicate with people who have Vio but certain functionality will be limited.</li>
                    <li><b>Camera.</b> Vio accesses camera to provide you capturing photos or videos to upload to your profile or events. You can always change this in your device settings.</li>
                    <li><b>Photos and videos.</b> Vio collects data from photo library to provide you uploading photos or videos to your profile or events. You can always change this in your device settings.</li>
                  </ul>
                  <p><b>Application Data.</b> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
                  <ul>
                    <li>Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, phone book (contact list), images, videos, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
                    <li>Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
                  </ul>
                  <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
                  <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                  <p>Information automatically collected</p>
                  <p><b>In Short:</b> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                  <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                  <p>The information we collect includes:</p>
                  <ul>
                    <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                  </ul>
                  `
    },
    {
        title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
        content: `<p></b>In Short:</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                  <p><b>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</b></p>
                  <ul>
                    <li><b>To facilitate account creation and authentication and otherwise manage user accounts.</b> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                    <li><b>To deliver and facilitate delivery of services to the user.</b> We may process your information to provide you with the requested service.</li>
                    <li><b>To enable user-to-user communications.</b> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
                    <li><b>To save or protect an individual's vital interest.</b> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
                  </ul>
                  `
    },
    {
        title: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?",
        content: `<p><b>In Short:</b> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
                <p>If you are located in the EU or UK, this section applies to you.</p>
                <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
                <ul>
                    <li><b>Consent.</b> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                    <li><b>Performance of a Contract.</b> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                    <li><b>Legal Obligations.</b> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                    <li><b>Vital Interests.</b> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                </ul>
                <p>If you are located in Canada, this section applies to you.</p>
                <p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
                <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
                <ul>
                    <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                    <li>For investigations and fraud detection and prevention</li>
                    <li>For business transactions provided certain conditions are met</li>
                    <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                    <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                    <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                    <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                    <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                    <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                    <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                    <li>If the information is publicly available and is specified by the regulations</li>
                </ul>
                
        `
    },
    {
        title: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
        content: `
                <p><b>In Short:</b> We may share information in specific situations described in this section and/or with the following third parties.</p>
                <p>We may need to share your personal information in the following situations:</p>
                <ul>    
                    <li><b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    <li><b>Other Users.</b> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.<b></li>
                </ul>
        
        `
    },
    {
        title: "5. HOW LONG DO WE KEEP YOUR INFORMATION?",
        content: `
                <p><b>In Short: </b> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
                <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
        `
    },
    {
        title: "6. HOW DO WE KEEP YOUR INFORMATION SAFE?",
        content: `
                <p><b>In Short:</b> We aim to protect your personal information through a system of organizational and technical security measures.</p>
                <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
        `
    },
    {
        title: "7. WHAT ARE YOUR PRIVACY RIGHTS?",
        content: `
        <p><b>In Short:</b> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
        <p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
        <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
        <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</p>
        <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.</p>
        <p><b>Withdrawing your consent:</b> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below or updating your preferences.</p>
        <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
        <p>Account Information</p>
        <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
        <ul>
            <li>Log in to your account settings and update your user account.</li>
        </ul>
        <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
        `
    },
    {
        title: "8. CONTROLS FOR DO-NOT-TRACK FEATURES",
        content: `<p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
        `
    },
    {
        title: "9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
        content: `
        <p>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
        <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
        <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p>
        `
    },
    {
        title: "10. DO WE MAKE UPDATES TO THIS NOTICE?",
        content: `
        <p><b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
        `
    },
    {
        title: "11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
        content: `
        <p>If you have questions or comments about this notice, you may email us at <a><u>contact@prismtechinc.io.</u></a></p>
        `
    }
];


const PrivacyItem: React.FC<{ privacy: PrivacyType }> = ({ privacy }) => {
  useEffect(() => {
    AOS.init({
        delay: 300, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true, //
    });
  }, []);


  return (
    <div className="privacy-section" data-aos="fade-right">
      <h4 className="privacy-title" >

        {privacy.title}
      </h4>
      <div
        className="privacy-content"
        data-aos="fade-right"
        dangerouslySetInnerHTML={{__html: privacy.content}}
      />
    </div>
  );
};

const Privacy: React.FC = () => {
  return (
    <section className="section home_sec_1">
      <div className="grid-container">
        <div className="grid-100">
          <h1>Privacy Policy</h1>
          {privacyTerms.map((privacy, index) => (
            <PrivacyItem key={index} privacy={privacy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;
