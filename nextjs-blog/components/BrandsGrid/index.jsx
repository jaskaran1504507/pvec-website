import ImageWithTextSlit from '../ImageWithTextSlit';

const BrandsGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ImageWithTextSlit
            imageUrl="/images/kliilk_shop.jpg"
            linkUrl="https://www.kliik.com/"
            linkText="Buy KLiik"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ImageWithTextSlit
              imageUrl="/images/rayban_shop.jpeg"
              linkUrl="https://www.ray-ban.com/canada/en"
              linkText="Buy Ray Ban"
            />
          </div>
          <div>
            <ImageWithTextSlit
              imageUrl="/images/lafont-shop.jpeg"
              linkUrl="https://www.lafont.com/the-collection/"
              linkText="Buy Lafont"
            />
          </div>
          <div>
            <ImageWithTextSlit
              imageUrl="/images/fysh_shop2.jpeg"
              linkUrl="https://fyshuk.com"
              linkText="Shop Fysh"
            />
          </div>
          <div>
            <ImageWithTextSlit
              imageUrl="/images/hugo_boss_shop.jpeg"
              linkUrl="https://www.hugoboss.com/men-glasses/"
              linkText="Shop Hugo Boss"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsGrid;
