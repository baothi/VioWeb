// FAQs.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type TermType = {
  title: string;
  content: string;
};

const terms: TermType[] = [
    {
        title: "",
        content: `
        <p><b>Last Updated: November 2, 2022 </b></p>
        <p>These terms of service (the <b>“Agreement”</b>) are entered into by and between You and PrismTech, Inc. (<b>“Company,” “we,”</b> or <b>“us”</b>). This Agreement governs your access to and use of our website, prismtech.io (the <b>“Website”</b>), and our Vio web application and mobile application (the <b>“Software”</b>), including their respective content, functionality, and services.  Collectively, the Website and Software are referred as the <b>“Services.”</b></p>
        <p>Please read this Agreement carefully before you start to use the Services.<b> By using the Services, you accept and agree to be bound and abide by this Agreement and our Privacy Policy, found at </b> <a><u>prismtech.vn/privacy-policy</u></a>, <b>incorporated herein by reference.</b> If you do not want to agree to this Agreement, you must not access or use the Services.</p>
        <p>These Services offered and available to users who are 13 years of age or older.  If you are using the mobile application version of our Software, your territorial use may be restricted to those registrations permitted by Apple, Google, or other such third party application store.  </p>
        <p>By using these Services, you represent and warrant that you meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Services.</p>
        `
    },
    {
        title: "DEFINITIONS",
        content: `
        <p>The following definitions will apply in this Agreement, and any reference to the singular includes a reference to the plural and vice versa.</p>
        <p><b>“Authorized Users”</b> means your employees, consultants, contractors, and agents who are authorized by You and PrismTech to access and use the Services under the rights granted to You pursuant to this Agreement.</p>
        <p><b>“Order Form”</b> means an order executed by You and PrismTech that specifies that Services to be provided to You under this Agreement.  Each Order Form shall incorporate this Agreement by reference.<b></p>
        `
    },
    {
        title: "ACCESS AND USE",
        content: `
        <p>Subject to and conditioned on your payment of the applicable fees and compliance with all other terms and conditions of this Agreement, PrismTech hereby grants you a non-exclusive, non-transferable right to access and use the Services during the term indicated in your Order Form, solely for use by Authorized Users in accordance with the terms and conditions herein. Such use is limited to your internal use. PrismTech shall provide you with the necessary passwords and network links or connections to allow you to access the Services. </p>

        `
    },
    {
        title: "LICENSE",
        content: `
        <p>Subject to the terms of this Agreement, Company grants you a limited, non-exclusive, and nontransferable license to: (a) download, install, and use the Software mobile application for your personal, non-commercial use on a single mobile device owned or otherwise controlled by you (<b>“Mobile Device”</b>) strictly in accordance with the Application’s documentation; (b) access, stream, download, and use on such Mobile Device the Services made available in or otherwise accessible through the mobile application; and (c) use the written documentation provided by PrismTech for use of the Services, strictly in accordance with this Agreement.</p>
        `
    },
    {
        title: "REGISTRATION INFORMATION",
        content: `
        <p>You may be required to provide information about yourself in order to register for and/or use certain Services. You agree that any such information shall be accurate. You may also be asked to choose a user name and password. You are entirely responsible for maintaining the security of your user name and password and agree not to disclose such to any third party.</p>
        `
    },
    {
        title: "YOUR CONTENT",
        content: `
        <p>You agree that You are solely responsible for the content (<b>“Content”</b>) sent or transmitted by You or displayed or uploaded by You in using the Services and for compliance with all laws pertaining to the Content, including, but not limited to, laws requiring You to obtain the consent of a third party to use the Content and to provide appropriate notices of third party rights. You represent and warrant that You have the right to upload the Content to the Services and that such use does not violate or infringe on any rights of any third party. Under no circumstances will PrismTech be liable in any way for any (a) Content that is transmitted or viewed while using the Services, (b) errors or omissions in the Content, or (c) any loss or damage of any kind incurred as a result of the use of, access to, or denial of access to Content. Although PrismTech is not responsible for any Content, PrismTech may delete any Content, at any time without notice to You, if PrismTech becomes aware that it violates any provision of this Agreement, or any law. You retain copyright and any other rights You already hold in Content which You submit, post or display on or through, the Services.</p>
        `
    },
    {
        title: "USE RESTRICTIONS",
        content: `
        <p>You shall not use the Services for any purposes beyond the scope of the access granted in this Agreement. You shall not at any time, directly or indirectly, and shall not permit any Authorized Users to: (i) copy, modify, or create derivative works of the Services or the documentation, in whole or in part; (ii) rent, lease, lend, sell, license, sublicense, assign, distribute, publish, transfer, or otherwise make available the Services or the documentation; (iii) reverse engineer, disassemble, decompile, decode, adapt, or otherwise attempt to derive or gain access to any software component of the Services, in whole or in part; (iv) remove any proprietary notices from the Services or the documentation; or (v) use the Services or the documentation in any manner or for any purpose that infringes, misappropriates, or otherwise violates any intellectual property right or other right of any person, or that violates any applicable law.</p>
        `
    },
    {
        title: "CUSTOMER OBLIGATIONS",
        content: `
        <p>You are responsible and liable for all uses of the Services and documentation resulting from access provided by You, directly or indirectly, whether such access or use is permitted by or in violation of this Agreement. Without limiting the generality of the foregoing, You are responsible for all acts and omissions of Authorized Users, and any act or omission by an Authorized User that would constitute a breach of this Agreement if taken by You will be deemed a breach of this Agreement by You. You shall use reasonable efforts to make all Authorized Users aware of this Agreement’s provisions as applicable to such Authorized User’s use of the Services, and shall cause Authorized Users to comply with such provisions.</p>
        `
    },
    {
        title: "PRISMTECH OBLIGATIONS FOR CONTENT",
        content: `
        <p>PrismTech will maintain reasonable physical and technical safeguards to prevent unauthorized disclosure of or access to Content, in accordance with industry standards. PrismTech will notify You if it becomes aware of unauthorized access to Content. PrismTech will not access, view or process Content except (a) as provided for in this Agreement and in PrismTech’s Privacy Policy; (b) as authorized or instructed by You, (c) as required to perform its obligations under this Agreement; or (d) as required by law. PrismTech has no other obligations with respect to Content.</p>
        `
    },
    {
        title:  "RESERVATION OF RIGHTS ",
        content: `
        <p>PrismTech reserves all rights not expressly granted to You in this Agreement. Except for the limited rights and licenses expressly granted under this Agreement, nothing in this Agreement grants, by implication, waiver, estoppel, or otherwise, to You or any third party any intellectual property rights or other right, title, or interest in or to the Services.</p>
        `
    },
    {
        title: "AGGREGATED STATISTICS ",
        content: `
        <p>Notwithstanding anything to the contrary in this Agreement, PrismTech may monitor your use of the Services and collect and compile Aggregated Statistics. As between PrismTech and You, all right, title, and interest in Aggregated Statistics, and all intellectual property rights therein, belong to and are retained solely by PrismTech. You acknowledge that PrismTech may compile Aggregated Statistics based on Customer Data input into the Services. Customer agrees that PrismTech may (a) make Aggregated Statistics publicly available in compliance with applicable law, and (b) use Aggregated Statistics to the extent and in the manner permitted under applicable law; provided that such Aggregated Statistics do not identify You or your Confidential Information.</p>
        `
    },
    {
        title: "SUPPORT",
        content:`
        <p>This Agreement does not entitle You to any support for the Services.  However, You may purchase support and other professional services by contacting PrismTech at: <a><u>contact@prismtechinc.io.</u></a>  Additional services shall be governed under separate terms and conditions.</p>
        `
    },
    {
        title: "CHARGES AND PAYMENT PROCESSING",
        content: `
        <p>You agree that PrismTech may charge to Your credit card or other payment mechanism selected by You and approved by PrismTech (<b>“Your Account”</b>) all amounts due and owing for the Services, including taxes and service fees, set up fees, subscription fees, or any other fee or charge associated with Your Account.  PrismTech may change prices at any time, including changing from a free service to a paid service and charging for Services that were previously offered free of charge; provided, however, that PrismTech will provide you with prior notice and an opportunity to terminate Your Account if PrismTech changes the price of a Service to which you are subscribed and will not charge you for a previously free Service unless you have been notified of the applicable fees and agreed to pay such fees. You agree that in the event PrismTech is unable to collect the fees owed to PrismTech for the Services through Your Account, PrismTech may take any other steps it deems necessary to collect such fees from You and that You will be responsible for all costs and expenses incurred by PrismTech in connection with such collection activity, including collection fees, court costs and attorneys’ fees. You further agree that PrismTech may collect interest at the lesser of 1.5% per month or the highest amount permitted by law on any amounts not paid when due. </p>
        <p>All financial transactions made in connection with the Services will be processed by a third party in accordance with their respective terms of use, privacy policy, and/or any applicable payment terms and conditions. We encourage you to learn about the practices of such third party. In no event will PrismTech be responsible for the actions or inactions of any third party payment processor, including, but not limited to, system downtime or payment service outages.</p>
        `
    },
    {
        title: "CANCELLATION",
        content: `
        <p>You may cancel your use of the Services at any time. If you cancel, you will not be billed for any additional subscription terms for the Services, and your Services will continue until the end of the current subscription term, as set forth on your Order Form. If you cancel, you will not receive a refund for any service already paid for.</p>
        `
    },
    {
        title: "SUSPENSION ",
        content: `
        <p>Notwithstanding anything to the contrary in this Agreement, PrismTech may suspend or terminate your and any Authorized User’s access to any portion or all of the Services if: </p>
        <ul>
            <li>PrismTech reasonably determines that there is a threat or attack on any of the Services;</li>
            <li>Your or any Authorized User’s use of the Services disrupts or poses a security risk to the Services or to any other customer or vendor of PrismTech;</li>
            <li>You, or any Authorized User, is using the Services for fraudulent or illegal activities; </li>
            <li>Subject to applicable law, You have ceased to continue its business in the ordinary course, made an assignment for the benefit of creditors or similar disposition of its assets, or become the subject of any bankruptcy, reorganization, liquidation, dissolution, or similar proceeding; </li>
            <li>PrismTech’s provision of the Services to You or any Authorized User is prohibited by applicable law;</li>
            <li>Any vendor of PrismTech has suspended or terminated PrismTech’s access to or use of any third-party services or products required to enable You to access the Services. </li>
        </ul>
        <p>PrismTech shall use commercially reasonable efforts to provide written notice of any Service suspension or termination to You and to provide updates regarding resumption of access to the Services. PrismTech shall use commercially reasonable efforts to resume providing access to the Services as soon as reasonably possible after the event giving rise to the Service Suspension is cured. PrismTech will have no liability for any damage, liabilities, losses (including any loss of data or profits), or any other consequences that You or any Authorized User may incur as a result of a service suspension or termination.</p>
        `
    },
    {
        title: "REFUNDS",
        content: `
        <p>In the event that PrismTech suspends or terminates your use of the Services or you close your account voluntarily, You understand and agree that you will receive no refund or exchange of any kind.  PrismTech, at its sole discretion, may decide to issues refunds in exceptional circumstances.</p>
        `
    },
    {
        title: "CONFIDENTIALITY",
        content: `
        <p>Either party may disclose or make available to the other party information about its business affairs, products, confidential intellectual property, trade secrets, third-party confidential information, and other sensitive or proprietary information that is designated, or otherwise identified as “confidential” (collectively, <b>“Confidential Information”</b>). Confidential Information does not include information that, at the time of disclosure is: (a) in the public domain; (b) known to the receiving party at the time of disclosure; (c) rightfully obtained by the receiving party on a non-confidential basis from a third party; or (d) independently developed by the receiving party. The receiving party shall not disclose the disclosing party’s Confidential Information to any person or entity, except to the receiving party’s employees who have a need to know the Confidential Information for the receiving party to exercise its rights or perform its obligations hereunder. Notwithstanding the foregoing, each party may disclose Confidential Information to the limited extent required (i) in order to comply with the order of a court or other governmental body, or as otherwise necessary to comply with applicable law, provided that the party making the disclosure pursuant to the order shall first have given written notice to the other party and made a reasonable effort to obtain a protective order; or (ii) to establish a party’s rights under this Agreement, including to make required court filings. On the expiration or termination of the Agreement, the receiving party shall promptly return to the disclosing party all copies, whether in written, electronic, or other form or media, of the disclosing party’s Confidential Information, or destroy all such copies and certify in writing to the disclosing party that such Confidential Information has been destroyed. Each party’s obligations of non-disclosure with regard to Confidential Information will expire five years from the date first disclosed to the receiving party; provided, however, with respect to any Confidential Information that constitutes a trade secret (as determined under applicable law), such obligations of non-disclosure will survive the termination or expiration of this Agreement for as long as such Confidential Information remains subject to trade secret protection under applicable law.</p>
        `
    },
    {
        title: "INTELLECTUAL PROPERTY OWNERSHIP",
        content: `
        <p>You acknowledge that, as between You and PrismTech, PrismTech owns all right, title, and interest, including all intellectual property rights, in and to the Services.</p>
        <p>If You or any of your employees or contractors sends or transmits any communications or materials to PrismTech by mail, email, telephone, or otherwise, suggesting or recommending changes to the Services, including without limitation, new features or functionality relating thereto, or any comments, questions, suggestions, or the like (<b>“Feedback”</b>), PrismTech is free to use such Feedback irrespective of any other obligation or limitation between the Parties governing such Feedback. You hereby assign to PrismTech on your behalf, and on behalf of your employees, contractors and/or agents, all right, title, and interest in, and PrismTech is free to use, without any attribution or compensation to any party, any ideas, know-how, concepts, techniques, or other intellectual property rights contained in the Feedback, for any purpose whatsoever, although PrismTech is not required to use any Feedback.</p>
        `
    },
    {
        title: "NOTICE FOR CLAIMS OF COPYRIGHT VIOLATIONS AND AGENT FOR NOTICE (DMCA)",
        content:`
        <p>If you are a copyright owner and have a good faith belief that any materials or Content made available through the Services infringes upon your copyrights, you may submit a copyright infringement notification to PrismTech pursuant to the Digital Millennium Copyright Act by providing us with the following information in writing:<p>
        <ul style="list-style: none;">
            <li>an electronic or physical signature of the copyright owner or the person authorized to act on behalf of the owner of the copyright interest;</li>
            <li>a description of the copyrighted work that you claim has been infringed;</li>
            <li>a description of where the material that you claim is infringing is located on the Service, with enough detail that we may find it on the Service;</li>
            <li>your address, telephone number, and email address;</li>
            <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and</li>
            <li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or are authorized to act on the copyright owner's behalf.</li>
        </ul>
        <p>Please consult your legal counsel for further details or see 17 U.S.C. §512(c)(3). PrismTech’s Agent for Notice of claims of copyright infringement can be reached as follows:</p>
        <p>By mail: PrismTech, Inc.</p>
        <p>By email: <a><u>contact@prismtechinc.io</u></a></p>
        `
    },
    {
        title: "WARRANTY DISCLAIMER",
        content: `
        <p>THE SERVICES ARE PROVIDED “AS IS” AND PRISMTECH HEREBY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. PRISMTECH SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE.  PRISMTECH MAKES NO WARRANTY OF ANY KIND THAT THE SERVICES, OR ANY PRODUCTS OR RESULTS OF THE USE THEREOF, WILL MEET CUSTOMER’S OR ANY OTHER PERSON’S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY SOFTWARE, SYSTEM, OR OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR FREE.</p>
        `
    },
    {
        title: "INDEMNIFICATION ",
        content: `
        <p>You agree to indemnify, defend and hold harmless PrismTech, its affiliates, officers, directors, employees, consultants, agents, and suppliers from any and all third party claims, liability, damages and/or costs (including, but not limited to, attorneys’ fees) arising from your use of the Services, your violation of this Agreement or the infringement or violation by You or any other user of Your Account, of any intellectual property or other right of any person or entity or applicable law.</p>
        `
    },
    {
        title: "LIMITATION OF LIABILITY",
        content: `
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL PRISMTECH OR ITS AFFILIATES, OR SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, EXEMPLARY OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS OR DAMAGE) ARISING OUT OF THE USE OF OR INABILITY TO USE THE SERVICES OR THE PROVISION OF OR FAILURE TO PROVIDE TECHNICAL OR OTHER SUPPORT SERVICES, WHETHER ARISING IN TORT (INCLUDING NEGLIGENCE) CONTRACT OR ANY OTHER LEGAL THEORY, EVEN IF PRISMTECH, ITS AFFILIATES, SUPPLIERS OR RESELLERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY CASE, PRISMTECH’S, ITS AFFILIATES’, SUPPLIERS’ AND RESELLERS’ MAXIMUM CUMULATIVE LIABILITY AND YOUR EXCLUSIVE REMEDY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL BE LIMITED TO THE AMOUNT ACTUALLY PAID BY YOU FOR THE SERVICES (IF ANY) IN THE TWELVE (12) MONTHS PRECEDING THE EVENT OR CIRCUMSTANCES GIVING RISE TO SUCH CLAIMS. Because some states and jurisdictions do not allow the exclusion or limitation of liability, the above limitation may not apply to You.</p>
        `
    },
    {
        title: "MISCELLANEOUS",
        content: `
        <p><b>Choice of Law and Forum.</b> This Agreement shall be governed by and construed under the laws of the State of Washington, U.S.A.  Parties consent to the exclusive jurisdiction and venue of the state courts located in and serving King County, Washington and the federal courts in the Western District of Washington.</p>
        <p><b>Waiver and Severability.</b> Failure by either party to exercise any of its rights under, or to enforce any provision of, this Agreement will not be deemed a waiver or forfeiture of such rights or ability to enforce such provision. If any provision of this Agreement is held by a court of competent jurisdiction to be illegal, invalid or unenforceable, that provision will be amended to achieve as nearly as possible the same economic effect of the original provision and the remainder of this Agreement will remain in full force and effect.</p>
        <p><b>General Provisions.</b> This Agreement embodies the entire understanding and agreement between the parties respecting the subject matter of this Agreement and supersedes any and all prior understandings and agreements between the parties respecting such subject matter, except that if You or your company have executed a separate written agreement or you have signed an order form referencing a separate agreement governing your use of the Services, then such agreement shall control to the extent that any provision of this Agreement conflicts with the terms of such agreement. PrismTech may elect to change or supplement the terms of this Agreement from time to time at its sole discretion. PrismTech will exercise commercially reasonable business efforts to provide notice to You of any material changes to this Agreement. Within ten (10) business days of posting changes to this Agreement (or ten (10) business days from the date of notice, if such is provided), they will be binding on You. If You do not agree with the changes, You should discontinue using the Services. If You continue using the Services after such ten-business-day period, You will be deemed to have accepted the changes to the terms of this Agreement. In order to participate in certain Services, You may be notified that You are required to download software and/or agree to additional terms and conditions. Unless expressly set forth in such additional terms and conditions, those additional terms are hereby incorporated into this Agreement. This Agreement has been prepared in the English Language and such version shall be controlling in all respects and any non-English version of this Agreement is solely for accommodation purposes.</p>
        `
    },
 
];


const TermItem: React.FC<{ term: TermType }> = ({ term }) => {
  useEffect(() => {
    AOS.init({
        delay: 300, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true, //
    });
  }, []);


  return (
    <div className="term-section" data-aos="fade-right">
      <h4 className="term-title" >

        {term.title}
      </h4>
      <div
        className="term-content"
        data-aos="fade-right"
        dangerouslySetInnerHTML={{__html: term.content}}
      />
    </div>
  );
};

const Term: React.FC = () => {
  return (
    <section className="section home_sec_1">
      <div className="grid-container">
        <div className="grid-100">
          <h1>Terms of Service</h1>
          {terms.map((term, index) => (
            <TermItem key={index} term={term} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Term;
