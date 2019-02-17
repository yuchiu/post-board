const initialState = {
  commentList: [
    {
      comment:
        "Hi, mongodb says this is actually scalable, but my app was going to be a small size app, so I didn’t have to worry much about it.",
      createdAt: 1550366895338,
      id: "ec76ab786a624b7788b0706a7b0008e6",
      postId: "eb529ea87e6d41de9cece46e6b5d629c",
      writer: "annoymous"
    },
    {
      comment:
        "t is better to use MongoDB Compass, its is from MongoDB team: https://www.mongodb.com/products/compass\nIt is more secure i think)",
      createdAt: 1550366879635,
      id: "ae789cfec60848a9a0649b3be212e16f",
      postId: "eb529ea87e6d41de9cece46e6b5d629c",
      writer: "annoymous"
    },
    {
      comment:
        "If you like the post, hit the 👏 button below so that others may find it useful. You can follow me on Twitter.",
      createdAt: 1550366866797,
      id: "bd2cd2a291ac466a8cd87bc5757a6ba1",
      postId: "eb529ea87e6d41de9cece46e6b5d629c",
      writer: "Twitter"
    },
    {
      comment:
        "Thank you for reading. If you find something wrong or better ways to do it, let me know in the comments below.",
      createdAt: 1550366858165,
      id: "3cb44c8158d74edebe39ef2ec2b99943",
      postId: "eb529ea87e6d41de9cece46e6b5d629c",
      writer: "DB Admin"
    },
    {
      comment: "You’re mongoDB is now acting as a real time DB 😉.",
      createdAt: 1550366847384,
      id: "a71a3ccfdbbd4b1eb7cd7a26728d121c",
      postId: "eb529ea87e6d41de9cece46e6b5d629c",
      writer: "annoymous"
    },
    {
      comment:
        "Karen Hao is the artificial intelligence reporter for MIT Technology Review. In particular, she covers the ethics and social impact of the technology as well as its applications for social good",
      createdAt: 1550366725149,
      id: "301b325355b3451eaa82965e70298fff",
      postId: "76442f98e5b242da97e14651818df511",
      writer: "annoymous"
    },
    {
      comment:
        "The skeleton of the sea urchin Cidaris rugosa is a porous mesh with the shape of another kind of periodic minimal surface. It’s actually an exoskeleton, sitting outside the organism’s soft tissue.",
      createdAt: 1550366661583,
      id: "56623b376f4a444596544dc2c0c58097",
      postId: "224b55d0da074a7b8149d12f021649e7",
      writer: "John D"
    },
    {
      comment:
        "Even if we don’t subscribe to that notion now, there’s something in Haeckel’s conviction that patterns are an irrepressible impulse of the natural world — one that we have every right to find beautiful.",
      createdAt: 1550366621774,
      id: "84393f4fdb8643a1ace09cc8a7b8aad0",
      postId: "224b55d0da074a7b8149d12f021649e7",
      writer: "annoymous"
    },
    {
      comment:
        "Reprinted with permission from Patterns in Nature: Why the Natural World Looks the Way It Does",
      createdAt: 1550366609917,
      id: "f49e141607f5457dba6f09e40f626c66",
      postId: "224b55d0da074a7b8149d12f021649e7",
      writer: "annoymous"
    },
    {
      comment:
        "Philip Ball is the author of Invisible: The Dangerous Allure of the Unseen and many books on science and art.",
      createdAt: 1550366593451,
      id: "68d44ae1ba6e4a169ca43f27c16b65f2",
      postId: "224b55d0da074a7b8149d12f021649e7",
      writer: "The University of Chicago Press."
    }
  ],
  selectedCommentList: [],
  selectedCommentCount: 0
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CREATE_COMMENT":
      newState.commentList.unshift(action.payload);
      newState.selectedCommentList.unshift(action.payload);
      newState.selectedCommentCount += 1;
      return newState;

    case "GET_POST_COMMENT_LIST":
      newState.selectedCommentList = newState.commentList.filter(
        comment => comment.postId === action.payload
      );
      newState.selectedCommentCount = newState.selectedCommentList.length;
      return newState;

    default:
      return state;
  }
};
