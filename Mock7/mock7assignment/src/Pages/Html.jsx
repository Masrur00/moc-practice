import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Html = () => {
  const [Loading, SetLoading] = useState(false);
  const [Maindata, SetData] = useState([]);
  const [page, SetPage] = useState(1);

  const getAllData = () => {
    SetLoading(true);
    axios({
      url: `https://api.github.com/search/repositories?q=stars:%3E1+language:HTML&&_page=${page}`,
      method: "GET",
      params: {
        page,
        per_page: 10,
      },
    })
      .then((res) => {
        SetLoading(false)
        SetData(res.data.items);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  useEffect(() => {
    getAllData();
  }, [page]);
  // console.log(Maindata)
  let newData = Maindata.sort((a, b) => {
    return b.stargazers_count - a.stargazers_count;
  });
  console.log(newData);
  return (
    <>
      <div className="pagination_div">
        <button disabled={page == 1} onClick={() => SetPage(page - 1)}>
          Prev
        </button>
        <button onClick={() => SetPage(page + 1)}>Next</button>
      </div>
      {Loading && (
        <div>
          <img
            src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
            alt=""
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </div>
      )}
      <div className="grid_div">
        {newData.map((el) => (
          <Link to={el.owner.repos_url}>
            <div className="grid_second">
              <div>
                <img src={el.owner.avatar_url} alt="" />
              </div>
              <div className="inner_div">
                <h1>{el.name}</h1>
                <h1>{el.language}</h1>
              </div>
              <div className="Flex_div">
                <div>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-64/star-bookmark-favorite-shape-rank-like-32386.png"
                    alt=""
                    style={{ width: "20px" }}
                  />
                  <p>{el.stargazers_count} Stars</p>
                </div>
                <div>
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/code-fork-5590542-4652657.png"
                    alt=""
                    style={{ width: "20px" }}
                  />
                  <p>{el.forks_count} forks</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
