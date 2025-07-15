'use client'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LineShareButton,
  LineIcon,
  ViberShareButton,
  ViberIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
  HackerNewsShareButton,
  HackerNewsIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  XingShareButton,
  XingIcon,
  WeiboShareButton,
  WeiboIcon,
  LivejournalShareButton,
  LivejournalIcon,
  FacebookMessengerShareButton,

} from 'next-share';

// Functional component for the ShareButton
const ShareButton = () => {
  return (
    <div className="bg-red-500 p-8">
      <h1 className="text-4xl mb-8">Your Next.js App</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <FacebookShareButton url={'https://www.code4coder.com/course'}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <PinterestShareButton url={'https://www.code4coder.com/course'}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <RedditShareButton url={'https://www.code4coder.com/course'}>
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <WhatsappShareButton url={'https://www.code4coder.com/course'}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <LinkedinShareButton url={'https://www.code4coder.com/course'}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <TwitterShareButton url={'https://www.code4coder.com/course'}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <EmailShareButton url={'https://www.code4coder.com/course'}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <TelegramShareButton url={'https://www.code4coder.com/course'}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <InstapaperShareButton url={'https://www.code4coder.com/course'}>
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <LineShareButton url={'https://www.code4coder.com/course'}>
            <LineIcon size={32} round />
          </LineShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <ViberShareButton url={'https://www.code4coder.com/course'}>
            <ViberIcon size={32} round />
          </ViberShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <WorkplaceShareButton url={'https://www.code4coder.com/course'}>
            <WorkplaceIcon size={32} round />
          </WorkplaceShareButton>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
          <WeiboShareButton url={'https://www.code4coder.com/course'}>
            <WeiboIcon size={32} round />
          </WeiboShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
