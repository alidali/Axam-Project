import { Theme, useMediaQuery } from "@mui/material";
import { FlexBox } from "components/flex-box";
import SearchInput from "components/SearchInput";
import React, { FC } from "react";

// ===============================================================
type SearchAreaProps = {
  handleSearch: () => void;
  searchPlaceholder: string;
};
// ===============================================================

const SearchArea: FC<SearchAreaProps> = (props) => {
  const { searchPlaceholder, handleSearch } = props;
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput sx={{border: `2px solid #D8E0E9`,width:'250px',color:"black", placeholderTextColor:"red",height:"55px"}} placeholder={searchPlaceholder} onClick={handleSearch} />
    </FlexBox>
  );
};



export default SearchArea;