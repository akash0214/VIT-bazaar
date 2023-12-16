import React from "react";
import illus from "../assets/img/illus.svg";
import av1 from "../assets/Avatar/av_1.svg";
import av2 from "../assets/Avatar/av_2.svg";
import av3 from "../assets/Avatar/av_3.svg";
import av4 from "../assets/Avatar/av_4.svg";

const Aboutus = () => {
  return (
    <div>
      <div>
        {/* Section - 1 */}
        <div className="w-full h-[40rem] mb-[10rem]">
          <div className="h-[10rem] pt-16 text-center  mx-auto text-3xl">
            <h1>We Design Build and ship world class digital products</h1>
          </div>
          <div>
            <div className="w-[35%] float-left h-[30rem] text-center">
              <ul className="pt-[3rem]">
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">5+</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]  ">
                      Website & Apps launched
                    </h3>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">0</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                      Awards & recognition
                    </h3>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="w-[30%] float-left h-[30rem] text-center">
              <img src={illus} alt="description-image" />
            </div>
            <div className="w-[35%] float-right h-[30rem] text-center">
              <ul className="pt-[3rem]">
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">100%</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                      in-house & independent
                    </h3>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">Ind</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                      working globally, proudly indian
                    </h3>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        {/* Section - 2 */}
        <div className="w-full h-full">
          {/* Cards - 1 */}
          <div className="flex flex-col sm:flex-row ">
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-3">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av1}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Jatin Singh</div>
                  <p class="text-gray-700 text-base">
                    Jatin is working on the Front-end portion of this project.The pages build by him are Home , About-us.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Cooking
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Automonile-blogs
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Jatin Singh
              </h2>
              <p className="text-xl text-center mt-16">
              Upcoming Intern @PriceWaterHouseCooper | Web developer | SalesForce Developer | Final Year Undergrad at Vellore Institute of Technology, Bhopal
              </p>
            </div>
          </div>
          {/* Cards - 2 */}
          <div className="flex flex-col-reverse sm:flex-row ">
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Sourabh Kumar
              </h2>
              <p className="text-xl text-center mt-16">
              Bajaj Finserv Hackathon Runner-up | Web developer | Final Year Undergrad at Vellore Institute of Technology, Bhopal
              </p>
            </div>
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-[-3deg]">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av2}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Sourabh Kumar Gupta</div>
                  <p class="text-gray-700 text-base">
                  Sourabh is working on the Front-end portion of this project.The pages build by him are Testimonial , Contact-us and Post-Item.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Basketball
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Blog
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Cards - 3 */}
          <div className="flex flex-col sm:flex-row ">
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-3">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av3}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Ashita Verma</div>
                  <p class="text-gray-700 text-base">
                  Ashita is working on the Front-end portion of this project.The pages build by her are Login/Signup , Landing.Ashita has also degigned this Website.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Cycling
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Travel
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Cooking
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Ashita Verma
              </h2>
              <p className="text-xl text-center mt-16">
              Former Advanced Application Analyst Intern @Accenture | Web developer | Final Year Undergrad at Vellore Institute of Technology, Bhopal
              </p>
            </div>
          </div>
          {/* Cards - 4 */}
          <div className="flex flex-col-reverse sm:flex-row ">
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Akash Singh
              </h2>
              <p className="text-xl text-center mt-16">
              Stock Market Analyst and Trader | Ex-Market Team Lead @FinTech Club VITB | Finance Enthusiast | Software Programmer | Algo Programmer
              </p>
            </div>
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-[-3deg]">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av4}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Akash Singh</div>
                  <p class="text-gray-700 text-base">
                  Akash is working on the Back-end portion of this project which include Database Management and User-Authentication.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Cards - 5 */}
          <div className="flex flex-col sm:flex-row ">
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-3">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av3}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Vidushi Shukla</div>
                  <p class="text-gray-700 text-base">
                  Vidushi is working on the Back-end portion of this project.Vidushi has also designed the Website.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Badminton
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Vidushi Shukla
              </h2>
              <p className="text-xl text-center mt-16">
              CTY Summer Intern @HPE | Microsoft Engage'22 | National Runner-up @ SIH'22 | Management lead @GDSC VIT Bhopal | ACM ICPC Regionalist'21 | Beta Microsoft Learn Student Ambassador
              </p>
            </div>
          </div>
        </div>
        {/* Section - 3 */}
        <div className="w-full h-[50rem] text-center pt-[5rem]">
          <img className="w-[40%] m-[auto]" src={illus} alt="grp-pic" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
