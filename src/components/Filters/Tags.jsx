import CheckboxInput from "../FormElements/CheckboxInput";
import { useEffect, useState } from "react";
import { selectTags } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { setFilters } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Tags = ({ tagsArray, setTagsArray, companiesArray }) => {
  const tags = useSelector(selectTags);
  const dispatch = useDispatch();
  const [tagInput, setTagInput] = useState("");
  const [filteredTags, setFilteredTags] = useState(["All", ...tags]);
  useEffect(() => {
    setFilteredTags([
      "All",
      ...tags.filter((tag) =>
        tag.toLowerCase().includes(tagInput.toLowerCase())
      ),
    ]);
  }, [tagInput, setFilteredTags, tags]);

  useEffect(() => {
    filteredTags.length !== tagsArray.length &&
      setTagsArray((tagsArray) => tagsArray.filter((brand) => brand !== "All"));
  }, [tags, filteredTags, setTagsArray]);
  useEffect(() => {
    dispatch(
      setFilters({ companiesArray: companiesArray, tagsArray: tagsArray })
    );
  }, [tagsArray, companiesArray, dispatch]);
  return (
    <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80 rounded-sm">
      <div className="sticky top-0 left-0 w-full bg-bg-white z-10 py-4">
        <input
          onChange={(e) => setTagInput(e.target.value)}
          placeholder="Tags"
          className="w-full border-border-gray border-2 rounded-md p-4"
        />
      </div>
      <div className="overflow-y-scroll">
        {filteredTags.map((tag) => (
          <CheckboxInput
            key={tag}
            label={tag}
            id={tag}
            labelArray={tagsArray}
            setLabelArray={setTagsArray}
            filteredLabels={filteredTags}
            isTags={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;

// import CheckboxInput from "../FormElements/CheckboxInput";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectTags } from "../../redux/selectors";

// const Tags = () => {
//   const [sortLabel, setSortLabel] = useState("");
//   const tags = useSelector(selectTags);

//   return (
//     <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80 rounded-sm">
//       <div className="sticky top-0 left-0 w-full bg-bg-white z-10 py-4">
//         <input
//           placeholder="Tags"
//           className="w-full border-border-gray border-2 rounded-md p-4"
//         />
//       </div>
//       <div className="overflow-y-scroll">
//         <CheckboxInput label="All" id="all" />
//         {/* {tags.map((tag) => (
//           <CheckboxInput
//             key={tag}
//             label={tag}
//             id={tag}
//             sortLabel={sortLabel}
//             setSortLabel={setSortLabel}
//           />
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Tags;
