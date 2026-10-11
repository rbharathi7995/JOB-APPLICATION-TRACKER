import { Link } from 'react-router-dom';
function Dashboard({jobs}){
    const length=jobs.length;
    console.log(length);
    var countApplied=0;
    var cntInterview=0;
    var cntOffers=0;
    jobs.forEach((job)=>{
        if(job.status==="Applied")
        countApplied++;

        if(job.status==="Interview")
        cntInterview++;

        if(job.status==="Offer")
        cntOffers++;
        
    })
    

    return(
        <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
                <p>Total Applications</p>
                <h2>{length}</h2>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
                <p>Applied</p>
                <h2>{countApplied}</h2>
            </div>

            <div className="rounded-xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
                <p>Interviews</p>
                <h2>{cntInterview}</h2>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <p>Offers</p>
                <h2>{cntOffers}</h2>
            </div>

        </div>
        <Link
            to="/applications"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
            View All Applications
        </Link>
     </div>
    )
}

export default Dashboard;