// import React, { useState } from "react";

// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// import styles from "../styles/FilterAccordion.module.scss";

// const FilterAccordion = () => {
//   const filters = [
//     {
//       id: 1,
//       title: "price",
//       type: "radio",
//       filters: [
//         { type: "radio", input: "Under $25" },
//         { type: "radio", input: "$26 to $50" },
//         { type: "radio", input: "$50 to $100" },
//         { type: "radio", input: "$100 to $500" },
//         { type: "radio", input: "Over $500" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Size",
//       type: "checkbox",
//       filters: [
//         { type: "checkbox", input: "Twin" },
//         { type: "checkbox", input: "Full" },
//         { type: "checkbox", input: "Queen" },
//         { type: "checkbox", input: "Kings" },
//         { type: "checkbox", input: "Others" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Color",
//       type: "checkbox",
//       filters: [
//         { type: "checkbox", input: "Red" },
//         { type: "checkbox", input: "Blue" },
//         { type: "checkbox", input: "White" },
//         { type: "checkbox", input: "Black" },
//         { type: "checkbox", input: "Gold" },
//         { type: "checkbox", input: "Bronze" },
//         { type: "checkbox", input: "Silver" },
//         { type: "checkbox", input: "Purple" },
//         { type: "checkbox", input: "Cream" },
//         { type: "checkbox", input: "Green" },
//       ],
//     },
//     {
//       id: 4,
//       title: "Brand",
//       type: "checkbox",
//       filters: [
//         { type: "checkbox", input: "Apple" },
//         { type: "checkbox", input: "Samsung" },
//         { type: "checkbox", input: "Xiaomi" },
//         { type: "checkbox", input: "Oneplus" },
//         { type: "checkbox", input: "Infinix" },
//         { type: "checkbox", input: "Tecno" },
//         { type: "checkbox", input: "Moto" },
//         { type: "checkbox", input: "Qmobile" },
//         { type: "checkbox", input: "LG" },
//         { type: "checkbox", input: "Nokia" },
//       ],
//     },
//   ];
//   // const mappedData = filters
//   //   .filter((filterdData) => {
//   //     filterdData.type === "checkbox";
//   //   })
//   //   .map((mappedData) => {
//   //     mappedData.filters;
//   //   })
//   //   .map((data) => {
//   //     return data[input];
//   //   });
//   const data = {
//     name: "Nokia",
//     checked: false,
//     name: "LG",
//     checked: false,
//     name: "Qmobile",
//     checked: false,
//     name: "Moto",
//     checked: false,
//     name: "Tecno",
//     checked: false,
//     name: "Infinix",
//     checked: false,
//     name: "Oneplus",
//     checked: false,
//     name: "Xiaomi",
//     checked: false,
//     name: "Samsung",
//     checked: false,
//     name: "Apple",
//     checked: false,
//     name: "Green",
//     checked: false,
//     name: "Cream",
//     checked: false,
//     name: "Purple",
//     checked: false,
//     name: "Silver",
//     checked: false,
//     name: "Bronze",
//     checked: false,
//     name: "Gold",
//     checked: false,
//     name: "Black",
//     checked: false,
//     name: "White",
//     checked: false,
//     name: "Blue",
//     checked: false,
//     name: "Red",
//     checked: false,
//     name: "Others",
//     checked: false,
//     name: "Kings",
//     checked: false,
//     name: "Queen",
//     checked: false,
//     name: "Full",
//     checked: false,
//     name: "Twin",
//     checked: false,
//   };

//   const [filterState, setFilterState] = useState(filters);
//   const [activeCurrentIndex, setActiveCurrentIndex] = useState();
//   const [radio, setRadio] = useState("");
//   const [checkbox, setCheckbox] = useState(data.checked);

//   const toggleShowAccordion = (id) => {
//     if (activeCurrentIndex === id) {
//       setActiveCurrentIndex();
//     } else {
//       setActiveCurrentIndex(id);
//     }
//   };

//   return (
//     <div className={styles.accordion_wrapper}>
//       {filterState?.map((filter) => (
//         <div className={styles.accordion_item} key={filter.id}>
//           <div
//             className={styles.accordion_heading}
//             onClick={() => toggleShowAccordion(filter.id)}
//           >
//             <h4>{filter.title} </h4>
//             <span>
//               {activeCurrentIndex === filter.id ? (
//                 <FiChevronUp className={styles.accordion_icon} />
//               ) : (
//                 <FiChevronDown className={styles.accordion_icon} />
//               )}
//             </span>
//           </div>
//           <div
//             className={
//               activeCurrentIndex !== filter.id
//                 ? styles.accordion_content
//                 : styles.accordion_content + " " + styles.show
//             }
//           >
//             {filter.filters.map((box, i) => (
//               <div className={styles.content_filter_wrapper} key={i}>
//                 <input
//                   type={box.type}
//                   name={box.input}
//                   id={box.input}
//                   value={box.type === "radio" && box.input}
//                   checked={
//                     box.type === "radio" ? radio === box.input : checkbox
//                   }
//                   onChange={(e) =>
//                     box.type === "radio"
//                       ? setRadio(e.target.value)
//                       : e.target.name===checkbox.name&& setCheckbox(e.target.checked)
//                       // setCheckbox({
//                       //     ...checkbox,
//                       //     [e.target.name]: e.target.checked,
//                       //   })
//                   }
//                 />
//                 <label htmlFor={box.input}>{box.input}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterAccordion;

// import React, { useState } from "react";

// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// import styles from "../styles/FilterAccordion.module.scss";

// const FilterAccordion = () => {
//   const filters = [
//     {
//       id: 1,
//       title: "price",
//       type: "radio",
//       filters: [
//         { type: "radio", input: "Under $25" },
//         { type: "radio", input: "$26 to $50" },
//         { type: "radio", input: "$50 to $100" },
//         { type: "radio", input: "$100 to $500" },
//         { type: "radio", input: "Over $500" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Size",
//       type: "checkbox",
//       filters: [
//         { type: "checkbox", input: "Twin", checked: false },
//         { type: "checkbox", input: "Full", checked: false },
//         { type: "checkbox", input: "Queen", checked: false },
//         { type: "checkbox", input: "Kings", checked: false },
//         { type: "checkbox", input: "Others", checked: false },
//       ],
//     },
//     {
//       id: 3,
//       title: "Color",
//       type: "checkbox",
//       filters: [
//         { type: "checkbox", input: "Red", checked: false },
//         { type: "checkbox", input: "Blue", checked: false },
//         { type: "checkbox", input: "White", checked: false },
//         { type: "checkbox", input: "Black", checked: false },
//         { type: "checkbox", input: "Gold", checked: false },
//         { type: "checkbox", input: "Bronze", checked: false },
//         { type: "checkbox", input: "Silver", checked: false },
//         { type: "checkbox", input: "Purple", checked: false },
//         { type: "checkbox", input: "Cream", checked: false },
//         { type: "checkbox", input: "Green", checked: false },
//       ],
//     },
//     {
//       id: 4,
//       title: "Brand",
//       type: "checkbox",
//       filters: [
//         { type: "checkbox", input: "Apple", checked: false },
//         { type: "checkbox", input: "Samsung", checked: false },
//         { type: "checkbox", input: "Xiaomi", checked: false },
//         { type: "checkbox", input: "Oneplus", checked: false },
//         { type: "checkbox", input: "Infinix", checked: false },
//         { type: "checkbox", input: "Tecno", checked: false },
//         { type: "checkbox", input: "Moto", checked: false },
//         { type: "checkbox", input: "Qmobile", checked: false },
//         { type: "checkbox", input: "LG", checked: false },
//         { type: "checkbox", input: "Nokia", checked: false },
//       ],
//     },
//   ];
//   // const mappedData = filters
//   //   .filter((filterdData) => {
//   //     filterdData.type === "checkbox";
//   //   })
//   //   .map((mappedData) => {
//   //     mappedData.filters;
//   //   })
//   //   .map((data) => {
//   //     return data[input];
//   //   });
//   const data = {
//     name: "Nokia",
//     checked: false,
//     name: "LG",
//     checked: false,
//     name: "Qmobile",
//     checked: false,
//     name: "Moto",
//     checked: false,
//     name: "Tecno",
//     checked: false,
//     name: "Infinix",
//     checked: false,
//     name: "Oneplus",
//     checked: false,
//     name: "Xiaomi",
//     checked: false,
//     name: "Samsung",
//     checked: false,
//     name: "Apple",
//     checked: false,
//     name: "Green",
//     checked: false,
//     name: "Cream",
//     checked: false,
//     name: "Purple",
//     checked: false,
//     name: "Silver",
//     checked: false,
//     name: "Bronze",
//     checked: false,
//     name: "Gold",
//     checked: false,
//     name: "Black",
//     checked: false,
//     name: "White",
//     checked: false,
//     name: "Blue",
//     checked: false,
//     name: "Red",
//     checked: false,
//     name: "Others",
//     checked: false,
//     name: "Kings",
//     checked: false,
//     name: "Queen",
//     checked: false,
//     name: "Full",
//     checked: false,
//     name: "Twin",
//     checked: false,
//   };

//   const [filterState, setFilterState] = useState(filters);
//   const [activeCurrentIndex, setActiveCurrentIndex] = useState();
//   const [radio, setRadio] = useState("");
//   // const [checkbox, setCheckbox] = useState(data.checked);

//   const toggleShowAccordion = (id) => {
//     if (activeCurrentIndex === id) {
//       setActiveCurrentIndex();
//     } else {
//       setActiveCurrentIndex(id);
//     }
//   };

//   const handleChange = ({ target: { value, name } }, filterSection, i) => {
//     const filterIndex = filterState.findIndex(
//       (filter) => filter.id !== filterSection.id
//     );

//     const modifiedFilters = filters.map((filter) => {
//       if (filterSection.id === filter.id) {
//         return {
//           ...filterSection,
//           filters: filterSection.filters.map((checkbox, currentIdx) => {
//             if (currentIdx === i)
//               return { ...checkbox, checked: !checkbox.checked };
//             return checkbox;
//           }),
//         };
//       }
//       return filter;
//     });
//     setFilterState(modifiedFilters);
//   };

//   return (
//     <div className={styles.accordion_wrapper}>
//       {filterState?.map((filter) => (
//         <div className={styles.accordion_item} key={filter.id}>
//           <div
//             className={styles.accordion_heading}
//             onClick={() => toggleShowAccordion(filter.id)}
//           >
//             <h4>{filter.title} </h4>
//             <span>
//               {activeCurrentIndex === filter.id ? (
//                 <FiChevronUp className={styles.accordion_icon} />
//               ) : (
//                 <FiChevronDown className={styles.accordion_icon} />
//               )}
//             </span>
//           </div>

//           <div
//             className={
//               activeCurrentIndex !== filter.id
//                 ? styles.accordion_content
//                 : styles.accordion_content + " " + styles.show
//             }
//           >
//             {filter.filters.map((box, i) => (
//               <div className={styles.content_filter_wrapper} key={i}>
//                 <input
//                   type={box.type}
//                   name={box.input}
//                   id={box.input}
//                   value={box.type === "radio" && box.input}
//                   checked={
//                     box.type === "radio" ? radio === box.input : box.checked
//                   }
//                   onChange={(e) => handleChange(e, filter, i)}
//                 />
//                 <label htmlFor={box.input}>{box.input}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterAccordion;

import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FilterAccordion.module.scss";

const FilterAccordion = () => {
  const filters = [
    {
      id: 1,
      title: "price",
      type: "radio",
      value: "Under $25",
      filters: [
        { type: "radio", input: "Under $25" },
        { type: "radio", input: "$26 to $50" },
        { type: "radio", input: "$50 to $100" },
        { type: "radio", input: "$100 to $500" },
        { type: "radio", input: "Over $500" },
      ],
    },
    {
      id: 2,
      title: "Size",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Twin", checked: false },
        { type: "checkbox", input: "Full", checked: false },
        { type: "checkbox", input: "Queen", checked: false },
        { type: "checkbox", input: "Kings", checked: false },
        { type: "checkbox", input: "Others", checked: false },
      ],
    },
    {
      id: 3,
      title: "Color",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Red", checked: false },
        { type: "checkbox", input: "Blue", checked: false },
        { type: "checkbox", input: "White", checked: false },
        { type: "checkbox", input: "Black", checked: false },
        { type: "checkbox", input: "Gold", checked: false },
        { type: "checkbox", input: "Bronze", checked: false },
        { type: "checkbox", input: "Silver", checked: false },
        { type: "checkbox", input: "Purple", checked: false },
        { type: "checkbox", input: "Cream", checked: false },
        { type: "checkbox", input: "Green", checked: false },
      ],
    },
    {
      id: 4,
      title: "Brand",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Apple", checked: false },
        { type: "checkbox", input: "Samsung", checked: false },
        { type: "checkbox", input: "Xiaomi", checked: false },
        { type: "checkbox", input: "Oneplus", checked: false },
        { type: "checkbox", input: "Infinix", checked: false },
        { type: "checkbox", input: "Tecno", checked: false },
        { type: "checkbox", input: "Moto", checked: false },
        { type: "checkbox", input: "Qmobile", checked: false },
        { type: "checkbox", input: "LG", checked: false },
        { type: "checkbox", input: "Nokia", checked: false },
      ],
    },
  ];
  // const mappedData = filters
  //   .filter((filterdData) => {
  //     filterdData.type === "checkbox";
  //   })
  //   .map((mappedData) => {
  //     mappedData.filters;
  //   })
  //   .map((data) => {
  //     return data[input];
  //   });
  const data = {
    name: "Nokia",
    checked: false,
    name: "LG",
    checked: false,
    name: "Qmobile",
    checked: false,
    name: "Moto",
    checked: false,
    name: "Tecno",
    checked: false,
    name: "Infinix",
    checked: false,
    name: "Oneplus",
    checked: false,
    name: "Xiaomi",
    checked: false,
    name: "Samsung",
    checked: false,
    name: "Apple",
    checked: false,
    name: "Green",
    checked: false,
    name: "Cream",
    checked: false,
    name: "Purple",
    checked: false,
    name: "Silver",
    checked: false,
    name: "Bronze",
    checked: false,
    name: "Gold",
    checked: false,
    name: "Black",
    checked: false,
    name: "White",
    checked: false,
    name: "Blue",
    checked: false,
    name: "Red",
    checked: false,
    name: "Others",
    checked: false,
    name: "Kings",
    checked: false,
    name: "Queen",
    checked: false,
    name: "Full",
    checked: false,
    name: "Twin",
    checked: false,
  };

  const [filterState, setFilterState] = useState(filters);
  const [activeCurrentIndex, setActiveCurrentIndex] = useState();
  // const [radio, setRadio] = useState("");
  // const [checkbox, setCheckbox] = useState(data.checked);

  const toggleShowAccordion = (id) => {
    if (activeCurrentIndex === id) {
      setActiveCurrentIndex();
    } else {
      setActiveCurrentIndex(id);
    }
  };

  const handleChange = ({ target: { value, name } }, filterSection, i) => {
    // handling both cases radio button and checkboxes.
    let modifiedFilters;
    if (filterSection.type === "radio")
      modifiedFilters = filterState.map((filter) => {
        if (filter.id === filterSection.id) {
          console.log(value);
          return { ...filter, value };
        }
        return filter;
      });
    else
      modifiedFilters = filterState.map((filter) => {
        if (filterSection.id === filter.id) {
          return {
            ...filterSection,
            filters: filterSection.filters.map((checkbox, currentIdx) => {
              if (currentIdx === i)
                return { ...checkbox, checked: !checkbox.checked };
              return checkbox;
            }),
          };
        }
        return filter;
      });

    setFilterState(modifiedFilters);
  };

  return (
    <div className={styles.accordion_wrapper}>
      {filterState?.map((filter) => (
        <div className={styles.accordion_item} key={filter.id}>
          <div
            className={styles.accordion_heading}
            onClick={() => toggleShowAccordion(filter.id)}
          >
            <h4>{filter.title} </h4>
            <span>
              {activeCurrentIndex === filter.id ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </span>
          </div>

          <div
            className={
              activeCurrentIndex !== filter.id
                ? styles.accordion_content
                : styles.accordion_content + " " + styles.show
            }
          >
            {filter.filters.map((box, i) => (
              <div className={styles.content_filter_wrapper} key={i}>
                <input
                  type={box.type}
                  name={box.input}
                  id={box.input}
                  value={box.type === "radio" && box.input}
                  checked={
                    box.type === "radio"
                      ? box.input === filter.value
                      : box.checked
                  }
                  onChange={(e) => handleChange(e, filter, i)}
                />
                <label htmlFor={box.input}>{box.input}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterAccordion;
