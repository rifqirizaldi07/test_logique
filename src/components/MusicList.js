import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineDollarCircle } from "react-icons/ai"

const MusicList = ({ music }) => {
    return (
        <Card className="card-music" style={{minHeight: "150px"}}>
            <Card.Body className="col-md-12 row">
                <div className="col-md-4 mb-2">
                    <Card.Img src={music.artworkUrl100 || ""} />
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
            </Card.Body>
        </Card>
    )
}

export default MusicList