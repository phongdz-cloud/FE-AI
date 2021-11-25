import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CusGetProfile, CusUpdateProfile, CusDeletePayment, cusGetType } from '../actions/userActions'

function ItemsLinesModal(props) {
    const ItemLines = props.data;
    const SpecialFields = props.data2;

    const itemLineDetails = ItemLines.map((ItemLine) =>
        <div>
            <div style={{ textAlign: 'center' }} className='row'>
                <h3 style={{ color: 'slateblue', paddingTop: '100px' }} className='col'>{ItemLine.item}</h3>
                <h3 style={{ color: 'slateblue', paddingTop: '100px' }} className='col'>{ItemLine.price}</h3>
            </div>
        </div>

    );
    return (itemLineDetails);
}

function PaymentListing(props) {

    const allPayment = props.data;

    function toggleEdit(e) {
        var x = document.getElementById(e).style.display
        if (x === 'block') {
            document.getElementById(e).style.display = 'none'
        }
        else {
            document.getElementById(e).style.display = 'block'
        }
    }

    const listPayments = allPayment.map((payment) =>
        <div>
            <div style={{ textAlign: 'center' }} className='row'>
                <h3 style={{ color: 'slateblue', paddingTop: '10px' }} className='col'><a rel="noreferrer" target="_blank" href={payment.imageBill}>Image</a></h3>
                <h3 style={{ color: 'slateblue', paddingTop: '10px' }} className='col'>{payment.uploadDate}</h3>
                <h3 style={{ color: 'slateblue', paddingTop: '10px' }} className='col'>{payment.type}</h3>
                <h3 style={{ paddingTop: '10px' }} className='col'><input value={payment.id} type='checkbox' onChange={props.onChange} /></h3>
                <h3 style={{ paddingTop: '10px' }} className='col'><input value={payment.id} type='button' onClick={e => toggleEdit(e.target.value)} /></h3>
            </div>
            <div id={payment.id} style={{ display: 'none' }}>
                <ItemsLinesModal data={payment.itemLines} data2={payment.specialFields} />
            </div>
        </div>

    );
    return (listPayments);
}

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const CusProfile = useSelector(state => state.CusProfile)
    const { profile } = CusProfile

    const UpdateProfile = useSelector(state => state.UpdateProfile)
    const { loading, successRes, errorRes } = UpdateProfile

    const getPayment = useSelector(state => state.getPayment)
    const { getPaymentLoading, allPayment } = getPayment

    const delePayment = useSelector(state => state.delePayment)
    const { deleLoading, deleSuccess, DeleFail } = delePayment

    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personalIncome, setPersonalIncome] = useState(0)
    const [monthlySpending, setMonthlySpending] = useState('')
    const [avatar, setAvatar] = useState('')
    const [paymentType, setPaymentType] = useState('DAILY')

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate('/signin')
        }
        else {
            if (!profile) {
                dispatch(CusGetProfile())
            }
            else {
                if (!profile.message) {
                    setFirstName(profile.firstName)
                    setLastName(profile.lastName)
                    setPersonalIncome(profile.personalIncome)
                    setMonthlySpending(profile.monthlySpending)
                    setusername(profile.user.username)
                    setEmail(profile.user.email)
                    setAvatar(profile.user.avatar)
                }
            }
        }

    }, [dispatch, navigate, userInfo, profile])

    const submitHandler = (e) => {
        e.preventDefault() //dispatch update profile
        dispatch(CusUpdateProfile({ firstName, lastName, personalIncome, monthlySpending }))

    }

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(cusGetType(paymentType))
    }

    const [ids, setIds] = useState([])

    const checkHandler = (e) => {
        const isChecked = e.target.checked

        if (isChecked) {
            if (!ids.includes(e.target.value)) {
                setIds([...ids, e.target.value])
            }
        }
        else {
            if (ids.includes(e.target.value)) {
                let index = ids.indexOf(e.target.value)
                ids.splice(index, 1)
            }
        }
    }

    const deleteHandler = (e) => {
        e.preventDefault()
        dispatch(CusDeletePayment(ids))
    }

    return (
        <>
            <article className='container'>
                <form className="row form" onSubmit={submitHandler}>
                    <div style={{ display: 'flex', justifyContent: 'center' }} className="container" >
                        <img src={avatar} alt="Girl in a jacket" width="100" height="100" />
                    </div>
                    <div className='col'>
                        <label className="form-label-wrapper">
                            <p className="form-label">UserName</p>
                            <input className="form-input" type="text" placeholder="your User name" required
                                value={username} onChange={e => setusername(e.target.value)} />
                        </label>
                        <label className="form-label-wrapper">
                            <p className="form-label">FirstName</p>
                            <input className="form-input" type="text" placeholder="Enter first name" required
                                value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </label>
                        <label className="form-label-wrapper">
                            <p className="form-label">last name</p>
                            <input className="form-input" type="text" placeholder="Enter your last name" required
                                value={lastName} onChange={e => setLastName(e.target.value)} />
                        </label>
                    </div>
                    <div className='col'>
                        <label className="form-label-wrapper">
                            <p className="form-label">Email</p>
                            <input className="form-input" type="email" placeholder="Enter your email" required
                                value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label className="form-label-wrapper">
                            <p className="form-label">Personal Income</p>
                            <input className="form-input" type="number" placeholder="enter your personal Income" required
                                value={personalIncome} onChange={e => setPersonalIncome(e.target.value)} />
                        </label>
                        <label className="form-label-wrapper">
                            <p className="form-label">monthly Spending</p>
                            <input className="form-input" type="text" placeholder="Enter your monthly Spending" required
                                value={monthlySpending} onChange={e => setMonthlySpending(e.target.value)} />
                        </label>
                    </div>
                    <button className="form-btn primary-default-btn transparent-btn" type='submit'>Update your Profile</button>
                    {firstName === '' && <div className='container' style={{ color: 'red', textAlign: 'center', fontSize: 25 }}>please update your profile</div>}
                    {successRes && <div className='container' style={{ color: 'springgreen', textAlign: 'center', fontSize: 25 }}>USER Updated !!</div>}
                    {errorRes && <div className='container' style={{ color: 'red', textAlign: 'center', fontSize: 25 }}>{errorRes.message}, {errorRes.details}</div>}
                    {loading && <div className='container' style={{ color: 'deepskyblue', textAlign: 'center', fontSize: 25 }}>loading...</div>}
                </form>
            </article>

            {/* save receipt */}
            <article className='container'>
                <form className="row form" >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }} className='container'>
                        <h1 style={{ color: 'orangered', textAlign: 'center', marginRight: '10px' }}>Saved Receipt</h1>
                        <select name="type" id="type" onChange={e => setPaymentType(e.target.value)}>
                            <option value="DAILY">DAILY</option>
                            <option value="MONTHLY">MONTHLY</option>
                        </select>
                        <button onClick={searchHandler}>Search</button>
                    </div>
                    {getPaymentLoading && <div className='container' style={{ color: 'deepskyblue', textAlign: 'center', fontSize: 25 }}>loading...</div>}
                    <button className="form-btn primary-default-btn" style={{ backgroundColor: 'red' }} onClick={deleteHandler}>Delete</button>
                </form>
                <form className="row form" >
                    <label className="container col">
                        <div style={{ color: 'darkcyan', textAlign: 'center' }} className='row'>
                            <h2 style={{ color: 'lightseagreen' }} className='col'>Link</h2>
                            <h2 style={{ color: 'lightseagreen' }} className='col'>CreatedDate</h2>
                            <h2 style={{ color: 'lightseagreen' }} className='col'>Type</h2>
                            <h2 style={{ color: 'lightseagreen' }} className='col'>TicktoDelete</h2>
                            <h2 style={{ color: 'lightseagreen' }} className='col'>ClickforDetails</h2>
                        </div>
                        {allPayment && <PaymentListing data={allPayment} onChange={checkHandler} />}
                        {deleLoading && <div className='container' style={{ color: 'deepskyblue', textAlign: 'center', fontSize: 25 }}>loading...</div>}
                        {deleSuccess && <div className='container' style={{ color: 'springgreen', textAlign: 'center', fontSize: 25 }}>Delete Complete !!</div>}
                        {DeleFail && <div className='container' style={{ color: 'red', textAlign: 'center', fontSize: 25 }}>{DeleFail.message}, {DeleFail.details}</div>}
                    </label>
                </form>
            </article>


            {/* {successRes && <h2 style={{ color: 'springgreen', marginTop: '30px' }}>USER Created !!</h2>}
                {errorRes && <h2 style={{ color: 'red', marginTop: '30px' }}>
                    {errorRes.message}, {errorRes.details}</h2>}
                {loading && <h2 style={{ color: 'deepskyblue', marginTop: '30px' }}>loading...</h2>} */}
        </>
    )
}

export default ProfileScreen
