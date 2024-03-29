import Button from "../components/Button";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect} from "react";



const Dashboard = () => {


    useEffect(() => {

        const token = localStorage.getItem('token')
        
        const fetchData = async () => {
          try {
            const response = await fetch('https://summary-be.vercel.app/api/v1/summaries', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
    
            if (!response.ok) {
              console.log(response)
            }
    
            const data = await response.json();
            // setSummaries([...data.summariesObject]);
            // console.log(summaries)
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps

        if(token) {
          fetchData();
        }
        
      }, []);

  return (
    <Layout>
        <div className="flex items-baseline justify-between">
            <div>
                <span className="font-base text-lg">Your Summaries</span>
            </div>
            <div>
                <Link to='/add-summary'>
                    <Button type='button' className='space-x-2 bg-[#3F8CFF] text-white py-2 px-4'>
                        <span>
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6988 6.9798C14.6377 6.45017 14.1901 6.03906 13.6471 6.03906C13.0623 6.03906 12.5883 6.51585 12.5883 7.104V12.4287H7.29418L7.17069 12.4358C6.6441 12.4974 6.23535 12.9475 6.23535 13.4936C6.23535 14.0818 6.7094 14.5585 7.29418 14.5585H12.5883V19.8832L12.5954 20.0074C12.6566 20.537 13.1041 20.9482 13.6471 20.9482C14.2319 20.9482 14.7059 20.4714 14.7059 19.8832V14.5585H20.0001L20.1235 14.5514C20.6501 14.4899 21.0589 14.0397 21.0589 13.4936C21.0589 12.9055 20.5848 12.4287 20.0001 12.4287H14.7059V7.104L14.6988 6.9798Z" fill="white"/>
                        </svg>
                        </span>
                        <span>
                            Add Summary
                        </span>

                    </Button>
                </Link>
                
            </div>
        </div>
        <div className="w-full">
            <div className="w-full">
                <div className="w-full h-full flex items-center justify-center">
                    <p className=" text-[#667085] text-center">You do not have any <br /> summary</p>
                </div>
            </div>
        </div>
    </Layout>
    
  )
}

export default Dashboard