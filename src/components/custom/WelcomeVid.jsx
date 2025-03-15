import HeroVideoDialog from "../magicui/hero-video-dialog";

const WelcomeVid = () => {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/XAOuIy2YBZk?si=UL2iAfo7Y_HYOOkW"
        thumbnailSrc="https://res.cloudinary.com/dasjswerc/image/upload/v1742050907/uploads/w1pvyiter3bnfstitjq9.jpg"
        thumbnailAlt="Video about me"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/XAOuIy2YBZk?si=UL2iAfo7Y_HYOOkW"
        thumbnailSrc="https://res.cloudinary.com/dasjswerc/image/upload/v1742050907/uploads/w1pvyiter3bnfstitjq9.jpg"
        thumbnailAlt="Video about me"
      />
    </div>
  );
};

export default WelcomeVid;

// "https://res.cloudinary.com/dasjswerc/image/upload/v1742049480/uploads/t59udbtesma25dlbhfc9.jpg"
