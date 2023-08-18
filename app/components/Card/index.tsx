import Link from "next/link"

function Tag({
    tag
}:{tag:string}) {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
    )
}

export default function Card({
    title,
    description,
    slug ='/',
    tags,
}:
{
    title:string,
    description:string,
    slug:string,
    tags:string[],
}){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
            <Link href={`/blog/${slug}`}>
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <Tag tag="#photograpy" />
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </Link>

        </div>
    )
}