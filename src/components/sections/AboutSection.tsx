
export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-accent">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://source.unsplash.com/800x1000/?realtor"
                alt="Mohamed Fiajudeen"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">
                About Mohamed Fiajudeen
              </h2>
              <p className="text-gray-700 mb-6">
                With over a decade of experience in Singapore's real estate market, I specialize in helping clients find their perfect home across HDB, private condominiums, and landed properties.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  CEA Licensed Property Agent
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Specializing in HDB, Condo, and Landed Properties
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Multilingual: English, Malay, Tamil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
