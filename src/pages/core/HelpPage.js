import React from "react";

const HelpPage = () => {
  return (
    <main>
      <section className="flex justify-center">
        <div>
          <form className="mt-5 bg-white p-10 shadow-lg rounded-lg">
            <h1 className="text-center text-3xl mb-3">
              Looks like you stuck at something
            </h1>
            <h5 className="text-center mb-3">
              Let us know about the problem you are facing
            </h5>

            <div className="mb-3">
              <a
                href="mailto:///help@localshoppers.com"
                className="text-center text-lg w-full py-2 px-2  text-white rounded-lg bg-indigo-500"
                type="submit"
              >
                Email Us
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HelpPage;
