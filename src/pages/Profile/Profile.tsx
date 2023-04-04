import React, { Component } from "react";
import Post from "../../components/Post/Post";
import { PostDetails } from "../../types/PostDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";

type profileProps = {};

type profileState = {
  postList: PostDetails[];
};

export default class Profile extends Component<profileProps, profileState> {
  constructor(props: profileProps) {
    super(props);

    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture Day-01",
          description:
            "Lecture D01 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 3,
          lecturerName: "Sanu",
          tags: ["Intro", "Type-Script"],
        },

        {
          id: "2",
          title: "Lecture Day-02",
          description:
            "Lecture D02 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 6,
          lecturerName: "Sanu",
          tags: ["React", "React-Routing"],
        },

        {
          id: "3",
          title: "Lecture Day-03",
          description:
            "Lecture D03 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 3,
          lecturerName: "Chanu",
          tags: ["React-DOM", "Components"],
        },
      ],
    };
  }

  render() {
    return (
      <section id="profile">
        <div className="py-6 px-28">
          <div
            className="bg-blue-800 text-white 
          flex justify-between items-center 
          cursor-pointer p-4 w-full rounded mb-1"
          >
            <h4>Create New Post</h4>
            <AddCircleIcon />
          </div>

          <div
            className="border border-slate-400
          rounded text-slate-400 flex justify-center items-center 
          cursor-pointer p-8 w-full gap-[9px]"
          >
            <PostAddIcon />
            <h6>Your New Post</h6>
          </div>
        </div>

        <div className="py-6 px-24">
          {this.state.postList.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              hoursCount={post.hoursCount}
              lecturerName={post.lecturerName}
              tags={post.tags}
            />
          ))}
        </div>
      </section>
    );
  }
}
