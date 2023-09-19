import ImageWithTextSlit from '../ImageWithTextSlit';

const BrandsGrid = ({ head, gridBrands }) => {
    return (
        (head && gridBrands) ? (
            <div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <ImageWithTextSlit
                            imageUrl={head.imageUrl}
                            linkUrl={head.linkUrl}
                            linkText={head.linkText}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-2 gap-8">
                        {gridBrands.map(a =>
                            <div>
                                <ImageWithTextSlit
                                    imageUrl={a.imageUrl}
                                    linkUrl={a.linkUrl}
                                    linkText={a.linkText}
                                />
                            </div>)}
                        {/* <div>
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
          </div> */}
                    </div>
                </div>
            </div>) : (<></>)
    );
};

export default BrandsGrid;
