import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },

  header: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textImput: {
    flex: 1,
    height: 64,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 24,
    padding: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 6,
  },

  addSection: {
    top: -32,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 6,
  },

  addButton: {
    backgroundColor: '#1E6F9F',
    height: 64,
    width: 64,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 20,
    color: '#F2F2F2'
  }, 

  taskSection: {
    paddingHorizontal: 24,
  },

  taskHeaderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },

  createInfoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },

  doneInfoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8284FA'
  },

  infoNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F2F2F2',
    backgroundColor: '#262626',
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 99
  },

  listEnptyContainer: {
    width: '100%',
    alignItems: 'center',
    borderTopColor: '#262626',
    borderTopWidth: 2,
    paddingTop: 70,
    gap: 16,
  },

  listEnptyText: {
    color: '#808080',
    fontSize: 18,
  },

   listEnptyTextBold: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
  },
});