import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Alert, Col, Collapse, Form, Row } from "react-bootstrap";
import { musicActions } from "../store/music.slice";
import MusicList from "../components/MusicList";
import Loader from "../components/Loader";
import { isEmpty } from "lodash";

const Homepage = () => {
    const dispatch = useDispatch()
    const music = useSelector(x => x.music.all)
    const [loading, setLoading] = useState(true)
    const [param, setParam] = useState({
        term: "",
        limit: 25
    })

    const [currentParam, setCurrentParam] = useState({
        ...param
    })

    const onChangeFilter = (key, val) => {
        setParam({ ...param, [key]: val })
    }

    const onSubmitFilter = (e) => {
        e.preventDefault()
        setCurrentParam({ ...currentParam, ...param })
        setLoading(true)
    }

    useEffect(() => {
        if (loading) dispatch(musicActions.getAll({ param }))
        return () => setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    return (
        <div className="homepageBg">
            <div className="container-fluid">
                <Collapse>
                <Form className="d-flex justify-content-center" onSubmit={onSubmitFilter}>
                    <Form.Group className="col-md-2 mb-2 mt-4 ">
                        <Form.Control
                            type="text"
                            placeholder="Search Music"
                            className="input-filter"
                            value={param.term}
                            onChange={e => onChangeFilter("term", e.target.value)}
                        />
                    </Form.Group>
                </Form>
                </Collapse>
                <div className="mt-4 mb-5">
                    {
                        music.loading ? <Loader /> :
                            music.error ? <Alert variant="danger">{music.data.message}</Alert> :
                                isEmpty(music.data.results) ? <Alert variant="warning" className="h-100">Data Not Found, Please Search For Your Music First</Alert> :
                                    (
                                        <>
                                            <Row>
                                                {
                                                    !music.loading && !music.error && !isEmpty(music.data.results) &&
                                                    music.data.results.map((row) => (
                                                        <Col key={row.id} sm={12} md={6} lg={4} xl={4} className="mb-4">
                                                            <MusicList music={row} />
                                                        </Col>
                                                    ))
                                                }
                                            </Row>
                                        </>
                                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage