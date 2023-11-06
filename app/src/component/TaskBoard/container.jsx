import { Board } from "../Common/Board";
import { CategoryBoard } from "../Common/categoryBoard";
import { Counts } from "../Counts";
import { DoneItems } from "../DoneTask/DoneItems";
import { ProgressItems } from "../ProgressItems/progressItems";
import { ReviewItems } from "../ReviewItems/ReviewItems";
import { SideBar } from "../Sidebar";
import { TodoItems } from "../TodoItem/todoitems";

export const Container = () => {
  return (
    <main>
      <Board bgColor={"gray-700"} padding={4} margin={2}>
        <h1 className="font-bold text-white text-3xl m-2">Tasks Board</h1>
        <hr className="m-3" />
        {/* <div className=""><AddTask/></div> */}
        <div className="flex justify-center gap-2">
          <SideBar />
          <div className="flex  bg-white rounded-lg shadow-lg p-2">
            <CategoryBoard bgColor={"red-400"} title={"Todo"}>
              <TodoItems />
            </CategoryBoard>

            <CategoryBoard bgColor={"yellow-300"} title={"In Progress"}>
              <ProgressItems />
            </CategoryBoard>

            <CategoryBoard bgColor={"blue-300"} title={"Review"}>
              <ReviewItems />
            </CategoryBoard>

            <CategoryBoard bgColor={"green-400"} title={"Done"}>
              <DoneItems />
            </CategoryBoard>
          </div>
          <Counts />
        </div>
      </Board>
    </main>
  );
};
