import {connect} from "react-redux";
import styles from './list.module.css'
import {useEffect, useState} from "react";
import {addRow, getList} from "../../redux/action";
import ListItem from "../listItem/ListItem";
import Pagination from "../pagination/Pagination";

const List = ({list, getList, addRow}) => {
    const [text, setText] = useState('')
    const [paginateList, setPaginateList] = useState([])

    useEffect(() => {
        !list.length && getList();
    }, [])

    useEffect(() => {
        setPaginateList(list.slice(0, 10))
    }, [list])

    function getValue({target}) {
        setText(target.value)
    }

    function addToDo() {
        addRow({
            title: text,
            id: `${list[0].id + 1}`
        })
        setText('')
    }

    function changePage(page){
        setPaginateList(list.slice(page * 10, page * 10 + 10))
    }

    return <div className={styles.toDoList}>
        <div className={styles?.inputWrapper}>
            <input type="text"
                   value={text}
                   onChange={(e) => getValue(e)}/>
            <button onClick={addToDo}>Add</button>
        </div>
        <Pagination length={list.length} changePage={changePage}>
            <div className={styles.list}>
                {
                    !!paginateList?.length && paginateList?.map((item) => {
                        return <ListItem key={item.id}
                                         data={item}/>
                    })
                }
            </div>
        </Pagination>
    </div>
}

const mapDispatchToProps = dispatch => ({
    getList: key => dispatch(getList(key)),
    addRow: key => dispatch(addRow(key)),
});

const mapStateToProps = state => ({list: state});

export default connect(mapStateToProps, mapDispatchToProps)(List)
