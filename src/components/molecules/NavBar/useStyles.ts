import makeStyles from '@material-ui/core/styles/makeStyles'
const useStyles = makeStyles((theme: any) => {
    return {
        root: {
            flexGrow: 1,
            position: 'absolute'
        },
        appBar: {
            backgroundColor: 'transparent',
            color: 'white'
        },
        toolBar: {
            backgroundColor: 'transparent',
            color: 'white',
            display:'flex',
            justifyContent:'flex-end'
        },
    }
})

export default useStyles
