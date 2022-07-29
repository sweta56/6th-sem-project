import Card from '../components/Reuseable/Card';
import DoctorData from '../DoctorInfo/Doctor.json';


const Appointment = () => {

    return (
        <div className='Container relative top-[80px] '>
             <div class="grid grid-cols-4 gap-4">
                 {
                    DoctorData.map((ele) => {
                           return (
                              <Card data={ele}/>
                           )
                    })
                 }
            </div> 
        </div>
    )
}
export default Appointment;