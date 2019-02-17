const initialState = {
  postList: [
    {
      commentCount: 0,
      createdAt: 1550366947377,
      id: "821fd3f0036d4f1ea229ef5e26cfb29d",
      post:
        "What do we trust? What can we believe — and what can’t we? What does it take to change people’s minds, at a moment when the truth itself is in doubt? There is a lot to unpack in these uncertain times, and in our February issue of Medium magazine — Reasonable Doubt — we’ll tackle these questions and more.",
      title: "Reasonable Doubt",
      writer: "annoymous"
    },

    {
      commentCount: 6,
      createdAt: 1550366837393,
      id: "eb529ea87e6d41de9cece46e6b5d629c",
      post:
        "Have you ever run into a scenario where you wanted to update your UI as soon as there is some change to your Mongo database ? For example, A new user gets added and you wanted that change to reflect in you UI without having to make an API call or constantly polling for changes. If so, then this post is for you.\n\nWhile the go to would be to use real time databases like firebase or RethinkDB, you actually can achieve this using your MongoDB too and it is pretty simple. MongoDB has something called change streams that allows you to listen to your database.\n\nThe method I’m going to show uses replicaSets , you can also achieve the same using sharded clusters. (click those links to read more about replicasets and sharded clusters)\n\nSo, the first step would be to convert your stand alone MongoDB to replica sets. This is because change streams is not available with standalone MongoDB (Honestly I was about to give up on seeing that, but trust me it’s simple).\n$ mongod --port 27017 --replSet rs0\nPS: Stop your current standalone mongo and then run the above command.\n\nThe above command starts your mongo instance as a replicaSet named as rs0.\n\nNow with your mongo running as replicaSet, before creating a new database we must initiate our replication set. To do so, open a new window and do the following\n$ mongo\n$ rs.initiate() \nNow let’s go and create our database. I use Robo 3T to manage my databases, you can create it in terminal using $use <Database_name> . I’m creating a db called UserDB.\n\nCreate a new Database\nNow our DB part is set. Scaffold an Express application and install Mongoose. My User model looks like this,\n\nUser model\nNow assume I have two users inside my User collection of UserDB. Now I want to subscribe to my UserDB for any changes on User collection. In your app.js code, the mongoDB connection string should look like this,\nrequire('./models/connection').connectMongoDB('mongodb://localhost/UserDB?replicaSet=rs0');\nI’m passing my dbURL to my connection module. (we need to explicitly mention the replicaSet).\n\nNow you can subscribe to you userDB using changeStreams so as to send those changes immediately on to the front end. Something like below,\nP.S: Do not put the change stream code inside io.onConnection, the CPU usage will shoot as high as 95%.\nI listen to the changes in User collection using the watch() method, and whenever there is any change, the change event listener provided by changeStreams gets fired. It accepts a callback function that receives the changed data as parameter.\n\nWe can go ahead and test it to see if it works. Run an update operation onUser collection and at the same time in another tab watch for the console.log messages of your app. You can see the changes real time. At this place, We can now forward this to the front end using socket.io.",
      title: "Using MongoDB as realtime DB with nodeJS.",
      writer: "annoymous"
    },

    {
      commentCount: 1,
      createdAt: 1550366708364,
      id: "76442f98e5b242da97e14651818df511",
      post:
        "Algorithms are increasingly being used to make ethical decisions. Perhaps the best example of this is a high-tech take on the ethical dilemma known as the trolley problem: if a self-driving car cannot stop itself from killing one of two pedestrians, how should the car’s control software choose who lives and who dies?\n\nn reality, this conundrum isn’t a very realistic depiction of how self-driving cars behave. But many other systems that are already here or not far off will have to make all sorts of real ethical trade-offs. Assessment tools currently used in the criminal justice system must consider risks to society against harms to individual defendants; autonomous weapons will need to weigh the lives of soldiers against those of civilians.\n\nThe problem is, algorithms were never designed to handle such tough choices. They are built to pursue a single mathematical goal, such as maximizing the number of soldiers’ lives saved or minimizing the number oy being used to make ethical decisions. Perhaps the best example of this is a high-tech take on the ethical dilemma known as the trolley problem: if a self-driving car cannot stop itself from killing one of two pedestrians, how should the car’s control software choose who lives and who dies?\n\nn reality, this conundrum isn’t a very realistic depiction of how self-driving cars behave. But many other systems that are already here or not far off will have to make all sorts of real ethical trade-offs. Assessment tools currently used in the criminal justice system must consider risks to society against harms to individual defendants; autonomous weapons will need to weigh the lives of soldiers against those of civilians.\n\nThe problem is, algorithms were never designed to handle such tough choices. They are built to pursue a single mathematical goal, such as maximizing the number of soldiers’ lives saved or minimizing the number of civilian deaths. When you start dealing with multiple, often competing, objectives or try to account for intangibles like “freedom” and “well-being,” a satisfactory mathematical solution doesn’t always exist.\n\n“We as humans want multiple incompatible things,” says Peter Eckersley, the director of research for the Partnership on AI, who recently released a paper that explores this issue. “There are many high-stakes situations where it’s actually inappropriate — perhaps dangerous — to program in a single objective function that tries to describe your ethics.”\n\nThese solutionless dilemmas aren’t specific to algorithms. Ethicists have studied them for decades and refer to them as impossibility theorems. So when Eckersley first recognized their applications to artificial intelligence, he borrowed an idea directly from the field of ethics to propose a solution: what if we built uncertainty into our algorithms?\n\n“We make decisions as human beings in quite uncertain ways a lot of the time,” he says. “Our behavior as moral beings is full of uncertainty. But when we try to take that ethical behavior and apply it in AI, it tends to get concretized and made more precise.” Instead, Eckersley proposes, why not explicitly design our algorithms to be uncertain about the right thing to do?\n\nEckersley puts forth two possible techniques to express this idea mathematically. He begins with the premise that algorithms are typically programmed with clear rules about human preferences. We’d have to tell it, for example, that we definitely prefer friendly soldiers over friendly civilians, and friendly civilians over enemy soldiers — even if we weren’t actually sure or didn’t think that should always be the case. The algorithm’s design leaves little room for uncertainty.\n\nThe first technique, known as partial ordering, begins to introduce just the slightest bit of uncertainty. You could program the algorithm to prefer friendly soldiers over enemy soldiers and friendly civilians over enemy soldiers, but you wouldn’t specify a preference between friendly soldiers and friendly civilians.\n\nIn the second technique, known as uncertain ordering, you have several lists of absolute preferences, but each one has a probability attached to it. Three-quarters of the time you might prefer friendly soldiers over friendly civilians over enemy soldiers. A quarter of the time you might prefer friendly civilians over friendly soldiers over enemy soldiers.\n\nThe algorithm could handle this uncertainty by computing multiple solutions and then giving humans a menu of options with their associated trade-offs, Eckersley says. Say the AI system was meant to help make medical decisions. Instead of recommending one treatment over another, it could present three possible options: one for maximizing patient life span, another for minimizing patient suffering, and a third for minimizing cost. “Have the system be explicitly unsure,” he says, “and hand the dilemma back to the humans.”\n\nCarla Gomes, a professor of computer science at Cornell University, has experimented with similar techniques in her work. In one project, she’s been developing an automated system to evaluate the impact of new hydroelectric dam projects in the Amazon River basin. The dams provide a source of clean energy. But they also profoundly alter sections of the river and disrupt wildlife ecosystems.\n\n“This is a completely different scenario from autonomous cars or other [commonly referenced ethical dilemmas], but it’s another setting where these problems are real,” she says. “There are two conflicting objectives, so what should you do?”\n\n“The overall problem is very complex,” she adds. “It will take a body of research to address all issues, but Peter’s approach is making an important step in the right direction.”\n\nIt’s an issue that will only grow with our reliance on algorithmic systems. “More and more, complicated systems require AI to be in charge,” says Roman V. Yampolskiy, an associate professor of computer science at the University of Louisville. “No single person can understand the complexity of, you know, the whole stock market or military response systems. So we’ll have no choice but to give up some of our control to machines.”",
      title: "Giving Algorithms a Sense of Uncertainty Make Them More Ethical",
      writer: "Karen Hao"
    },

    {
      commentCount: 4,
      createdAt: 1550366521992,
      id: "224b55d0da074a7b8149d12f021649e7",
      post:
        "How do bees do it? The honeycombs in which they store their amber nectar are marvels of precision engineering, an array of prism-shaped cells with a perfectly hexagonal cross-section. The wax walls are made with a very precise thickness, the cells are gently tilted from the horizontal to prevent the viscous honey from running out, and the entire comb is aligned with the Earth’s magnetic field. Yet this structure is made without any blueprint or foresight, by many bees working simultaneously and somehow coordinating their efforts to avoid mismatched cells.\n\nThe ancient Greek philosopher Pappus of Alexandria thought that the bees must be endowed with “a certain geometrical forethought.” And who could have given them this wisdom, but God? According to William Kirby in 1852, bees are “Heaven-instructed mathematicians.” Charles Darwin wasn’t so sure, and he conducted experiments to establish whether bees are able to build perfect honeycombs using nothing but evolved and inherited instincts, as his theory of evolution would imply.\n\n\nFORCES AT WORK: Bees seem to have evolved capabilities for making perfectly hexagonal cells from the soft wax that they secrete. However, some researchers believe that surface tension in the soft wax might be sufficient to pull the cells into shape, in much the same way as it organizes bubbles in a bubble raft. Photo: Grafissimo/E+/Getty Images\nWhy hexagons, though? It’s a simple matter of geometry. If you want to pack together cells that are identical in shape and size so that they fill all of a flat plane, only three regular shapes (with all sides and angles identical) will work: equilateral triangles, squares, and hexagons. Of these, hexagonal cells require the least total length of wall, compared with triangles or squares of the same area. So it makes sense that bees would choose hexagons, since making wax costs them energy, and they will want to use up as little as possible — just as builders might want to save on the cost of bricks. This was understood in the 18th century, and Darwin declared that the hexagonal honeycomb is “absolutely perfect in economizing labor and wax.”\n\nDarwin thought that natural selection had endowed bees with instincts for making these wax chambers, which had the advantage of requiring less energy and time than those with other shapes. But even though bees do seem to possess specialized abilities to measure angles and wall thickness, not everyone agrees about how much they have to rely on them. That’s because making hexagonal arrays of cells is something that nature does anyway.\n\n\nFITTING IN: A single layer or “raft” of bubbles contains mostly hexagonal bubbles, albeit not all of them perfect hexagons. There are some “defects” — bubbles with perhaps five or seven sides. Nonetheless, all the junctions of bubble walls are threefold, intersecting at angles that are close to 120 degrees. Photo: Kimberly Brotherman/Moment Open/Getty Images\nIf you blow a layer of bubbles on the surface of water — a so-called “bubble raft” — the bubbles become hexagonal, or almost so. You’ll never find a raft of square bubbles: If four bubble walls come together, they instantly rearrange into three-wall junctions with more or less equal angles of 120 degrees between them, like the center of the Mercedes-Benz symbol.\n\nEvidently there are no agents shaping these rafts as bees do with their combs. All that’s guiding the pattern are the laws of physics. Those laws evidently have definite preferences, such as the bias toward three-way junctions of bubble walls. The same is true of more complicated foams. If you pile up bubbles in three dimensions by blowing through a straw into a bowl of soapy water you’ll see that when bubble walls meet at a vertex, it’s always a four-way union with angles between the intersecting films roughly equal to about 109 degrees — an angle related to the four-faceted geometric tetrahedron.\n\nPhilip Ball is the author of Invisible: The Dangerous Allure of the Unseen and many books on science and art.",
      title: "Why Nature Prefers Hexagons",
      writer: "Philip Ball"
    }
  ],
  selectedPost: {
    commentCount: 0,
    createdAt: 1550366947377,
    id: "821fd3f0036d4f1ea229ef5e26cfb29d",
    post:
      "What do we trust? What can we believe — and what can’t we? What does it take to change people’s minds, at a moment when the truth itself is in doubt? There is a lot to unpack in these uncertain times, and in our February issue of Medium magazine — Reasonable Doubt — we’ll tackle these questions and more.",
    title: "Reasonable Doubt",
    writer: "annoymous"
  },
  postListCount: 4
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CREATE_COMMENT":
      // increase comment count of the post that user left comment on
      newState.postList.map(post => {
        if (post.id === action.payload.postId) {
          // eslint-disable-next-line
          post.commentCount = post.commentCount+1;
        }
        return post;
      });
      return newState;

    case "GET_POST_DETAIL":
      newState.selectedPost = newState.postList.filter(
        post => post.id === action.payload
      );
      if (newState.selectedPost) {
        newState.selectedPost = newState.selectedPost[0];
      }
      return newState;

    case "CREATE_POST":
      newState.postList.unshift(action.payload);
      newState.postListCount += 1;
      newState.selectedPost = action.payload;
      return newState;

    default:
      return state;
  }
};
