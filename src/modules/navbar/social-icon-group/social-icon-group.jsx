import IconButton from "@/components/icon-button/icon-button";
import {
  FacebookFilled,
  InstagramOutlined,
  SendOutlined,
} from "@ant-design/icons";

const SocialIconGroup = () => {
  const handleClick = e => {
    console.log(e.target);
  };
  return (
    <div className="flex gap-5">
      <IconButton icon={<InstagramOutlined />} handleClick={handleClick} />
      <IconButton icon={<FacebookFilled />} handleClick={handleClick} />
      <IconButton icon={<SendOutlined />} handleClick={handleClick} />
    </div>
  );
};

export default SocialIconGroup;
