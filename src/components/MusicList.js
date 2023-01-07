import React, {useState} from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { AiOutlineDollarCircle } from "react-icons/ai"

const MusicList = ({ music }) => {
    const [open, setOpen] = useState(true)
    return (
        <Card className="card-music">
            <Card.Body className="col-md-12 row" onClick={() => setOpen(!open)}>
                <div className="col-md-4 mb-2">
                    <Card.Img src={music.artworkUrl100 || ""} className="image-music"/>
                </div>
                <div className="col-md-8">
                    <p className="artis-name">{music.artistName}</p>
                    <p className="song-name">{music.collectionCensoredName}</p>
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                        <Button size="sm" disabled={true} className="button-genre">{music.primaryGenreName}</Button>
                        <div className="mt-1">
                            <AiOutlineDollarCircle className="icon-rating" /><span className="rating-music">{music.trackPrice}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                    <Collapse in={!open}>
                    <audio src={music.previewUrl} controls/>
                    </Collapse>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MusicList