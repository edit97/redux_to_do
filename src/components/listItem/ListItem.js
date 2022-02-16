import {connect} from "react-redux";
import styles from './listItem.module.css'
import {useState} from "react";
import {delRow, editable, editRow} from "../../redux/action";
import {Delete, Edit, Save} from "../../assets";

const ListItem = ({data, delRow, editable, editRow}) => {
    const [text, setText] = useState('')

    function getValue({target}) {
        setText(target.value)
    }

    function setEditable() {
        editable(data.id)
        setText(data.title)
    }

    return <div className={`${styles.toDoItem} `}>
        <input type="text"
               value={!data.editing ? data.title : text}
               disabled={!data.editing}
               onChange={getValue}
               className={`${styles.editingInput} ${!data.editing ? styles.inactive : styles.active}`}
        />
        <div className={styles.actions}>
            {!data.editing && <Delete onClick={() => delRow(data.id)}
                     className={styles.actionsIcon}
                     title={''}/>}
            {
                !data.editing ? <Edit className={styles.actionsIcon} onClick={setEditable}/>
                    : <Save className={styles.actionsIcon} onClick={() => editRow({id: data.id, title: text})}/>
            }
        </div>
    </div>
}

const mapDispatchToProps = dispatch => ({
    delRow: key => dispatch(delRow(key)),
    editable: key => dispatch(editable(key)),
    editRow: key => dispatch(editRow(key)),
});

const mapStateToProps = state => ({list: state});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
