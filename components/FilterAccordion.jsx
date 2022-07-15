import React from "react";
// import filter from "../styles/FilterAccordion.module.scss";

const FilterAccordion = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingOne">
          <button
            className=" accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-3
                        px-2
                        text-base text-gray-800 text-left
                        bg-white
                        transition
                        focus:outline-0
                        hover:outline-0
                        active:outline-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Price
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-2 px-1">
            <div class="flex justify-start">
              <div className="w-full px-4 my-2">
                <div class="form-check flex justify-between w-full">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexRadioDefault1"
                  >
                    Default radio
                  </label>
                </div>
                <div class="form-check flex justify-between w-full">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexRadioDefault2"
                  >
                    Default checked
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
