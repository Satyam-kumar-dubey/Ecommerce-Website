import "./Search.css";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/headphone-prod-3.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setshowSearch }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[Title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose
          className="search-close"
          onClick={() => setshowSearch(false)}
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-result-item" onClick={() =>{
                navigate("/product/" + item.id )
                setshowSearch(false)
            }}>
              <div className="seach-resultimg-container">
                <img
                  src={
                    import.meta.env.VITE_ADMIN_URL +
                    item?.attributes?.Image?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="search-prod-details">
                <div className="search-name">{item.attributes.Title}</div>
                <div className="search-desc">{item.attributes.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Search;
