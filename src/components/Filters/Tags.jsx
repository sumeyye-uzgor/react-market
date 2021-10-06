import CheckboxInput from "../FormElements/CheckboxInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTags } from "../../redux/selectors";

const Tags = () => {
  const [sortLabel, setSortLabel] = useState("");
  const tags = useSelector(selectTags);

  return (
    <div className="w-full bg-bg-white mt-5 flex flex-col px-4 pb-4 h-80 rounded-sm">
      <div className="sticky top-0 left-0 w-full bg-bg-white z-10 py-4">
        <input
          placeholder="Tags"
          className="w-full border-border-gray border-2 rounded-md p-4"
        />
      </div>
      <div className="overflow-y-scroll">
        <CheckboxInput label="All" id="all" />
        {tags.map((tag) => (
          <CheckboxInput
            key={tag.id}
            label={tag.name}
            id={tag.name}
            sortLabel={sortLabel}
            setSortLabel={setSortLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
