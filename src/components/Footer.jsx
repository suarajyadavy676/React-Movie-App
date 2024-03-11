import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="text-red-900 text-center my-3 w-5/6 m-auto">
      <h1 className="text-red-900">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div className="flex justify-center mt-4 flex-wrap">
        <input
          type="email"
          placeholder="Email Address"
          className=" text-center border-2 border-black border-solid mr-10"
        />
        <button className="bg-red-600 rounded-lg text-white mt-3 sm:mt-0">
          Get Started{">"}
        </button>
      </div>
      <p className="my-4">
        Questions? <a href="tel:+123456789" className="hover:underline">Call 000-800-919-1694</a>{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="my-2">
        <Link to="#" className="hover:underline">FAQ</Link><br />
        <Link to="#" className="hover:underline">Investor Relations</Link><br />
        <Link to="#" className="hover:underline">Privacy</Link><br />
        <Link to="#" className="hover:underline">Speed Test</Link>
      </div>
      <div className="my-2">
        <Link to="#" className="hover:underline">Help Center</Link><br />
        <Link to="#" className="hover:underline">Jobs</Link><br />
        <Link to="#" className="hover:underline">Cookie Preferences</Link><br />
        <Link to="#" className="hover:underline">Legal Notices</Link>
      </div>
      <div className="my-2">
        <Link to="#" className="hover:underline">Account</Link><br />
        <Link to="#" className="hover:underline">Jobs</Link><br />
        <Link to="#" className="hover:underline">Cookie Preferences</Link><br />
        <Link to="#" className="hover:underline">Legal Notices</Link>
      </div>
      <div className="my-2">
        <Link to="#" className="hover:underline">Media Centre</Link><br />
        <Link to="#" className="hover:underline">Terms of Use</Link><br />
        <Link to="#" className="hover:underline">Contact Us</Link><br />
      </div>
      </div>
    </div>
  );
}

export default Footer;
