// Write your JS code here
// import './index.css'
import Image from "next/image";

const BlogItem = props => {
    const { blogDetails } = props
    const { coverImage, title, description, publishedDate, id, idTitle } = blogDetails

    return (
        <li className="w-full border-b border-solid border-x-stone-200 my-8">
            <a data-scroll-nav="0"
                href={`/blogs/${idTitle}`}
              >
            <div className="flex">
                {coverImage && <div >
                    <Image
                        // layout="fill"
                        // objectFit="cover"
                        style={{maxHeight:"180px", maxWidth:"260px"}}
                        className="rounded-lg"
                        src={coverImage}
                        alt=""
                        srcSet=""
                        height="250"
                        width="355"
                    />
                </div>}
                <div className="flex flex-col ml-8">
                    <h1 className="font-roman font-bold text-2xl text-sky-600">{title}</h1>
                <p className="font-roman text-xl text-blue-950">{description}</p>
                <p className="font-roman text-sm text-slate-400 mt-8">{publishedDate}</p>
                </div>
            </div>
            </a>
        </li>
    )
}

export default BlogItem
