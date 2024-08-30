import './index.css'
const MusicList = props => {

    const {details, changeSong} = props
    
    const {artist, name , cover, url, musicId, accent} = details  

    
    const imgurl = `https://cms.samespace.com/assets/${cover}`

 const onclickSong = () =>{
        changeSong(cover, name, artist, url, musicId ,accent)
    }


    return (
        <li className='cont' onClick={onclickSong}>
            <div className="first-cont">
                <div className='left-cont'>
                    <div className='img-cont'>
                        <img src={imgurl} alt="imagehere" className='image-style'/>
                    </div>
                    <div className='names-cont'>
                        <h1 className='heading'>{name}</h1>
                        <p className='para'>{artist}</p>
                    </div>
                </div>
                <div className='duration'>4:44</div>
            </div>

        </li>
    )

}
export default MusicList