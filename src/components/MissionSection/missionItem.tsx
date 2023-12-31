import TrendingUpIcon from "@mui/icons-material/TrendingUp";
type Prop = {
  title: string;
  description: string;
};
export default function MissionItem({ title, description }: Prop) {
  return (
    <div className="w-full flex  justify-center items-start gap-5 group  transition duration-300">
      <div className="w-[65px!important] h-[65px!important] bg-[slategray] rounded-[50%] p-3">
        <TrendingUpIcon
          sx={{ color: "white", width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-col w-[70%]">
        <div>
          <p className="text-[22px] font-bold ">{title}</p>
          <span className="block max-w-[50px] group-hover:max-w-[80px] transition-all duration-500 h-[3px] bg-[#C50017] mt-1"></span>
        </div>
        <p className="font-[400] mt-3">{description}</p>
      </div>
    </div>
  );
}
