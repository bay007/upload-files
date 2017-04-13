import React, { Component } from 'react';
import { Alert, Intent, IconClasses, Button } from '@blueprintjs/core';
import {
  Classes,
  ITetherConstraint,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  PopoverInteractionKind,
  Position,
} from '@blueprintjs/core';

const PhotoEditor = ({ photos }) => {
  const items = photos.map(photo => {
    return (
      <div key={photo.id}>
        <PhotoItem photo={photo} />
      </div>
    );
  });
  return (
    <div className="photoEditor">
      {items}
      {<UploadPhoto />}
    </div>
  );
};

export default PhotoEditor;

class ImageOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
      isOpenAlertDelete: false,
    };

    this.onclickToggleMenu = this.onclickToggleMenu.bind(this);
    this.handleMoveClose = this.handleMoveClose.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onclickToggleMenu(a) {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  }

  handleMoveClose() {
    alert('Enviar ACTION a mobx para modificar el estado');
    this.setState({ isOpenAlertDelete: false });
  }

  handleClose() {
    this.setState({ isOpenAlertDelete: false });
  }

  render() {
    const isEditableIcon = this.props.photo.isEditable
      ? IconClasses.STAR
      : IconClasses.STAR_EMPTY;

    const isEditableColor = this.props.photo.isEditable
      ? 'pt-intent-primary'
      : null;

    const menu = () => {
      return (
        <Menu>
          <MenuItem
            iconName={IconClasses.STAR}
            text="Hacer editable"
            disabled={this.props.photo.isEditable}
            onClick={() => {
              alert('mandar ACTION a mobx modificar isEditable flag');
              this.setState({ isOpenMenu: !this.state.isOpenMenu });
            }}
          />
          <MenuItem
            iconName={IconClasses.STAR_EMPTY}
            text="Quitar editable"
            disabled={!this.props.photo.isEditable}
            onClick={() => {
              alert('mandar ACTION a mobx modificar isEditable flag');
              this.setState({ isOpenMenu: !this.state.isOpenMenu });
            }}
          />
          <MenuDivider title="Editar" />
          <MenuItem
            iconName={IconClasses.EDIT}
            text="Editar Menu-Items"
            disabled={!this.props.photo.isEditable}
            onClick={() => {
              alert('Link a Modify Menu Items');
              this.setState({ isOpenMenu: !this.state.isOpenMenu });
            }}
          />
          <MenuDivider title="Cuidado" />
          <MenuItem
            iconName={`${IconClasses.TRASH} pt-intent-danger`}
            text="¡Eliminar!"
            onClick={() => {
              this.setState({ isOpenAlertDelete: true });
              this.setState({ isOpenMenu: !this.state.isOpenMenu });
            }}
          />
        </Menu>
      );
    };

    const alert = () => {
      return (
        <Alert
          intent={Intent.PRIMARY}
          isOpen={this.state.isOpenAlertDelete}
          confirmButtonText="¿Eliminar?"
          cancelButtonText="Cancelar"
          onConfirm={this.handleMoveClose}
          onCancel={this.handleClose}
        >
          <p>
            ¿Realmente quiere
            {' '}
            <b>Eliminar?</b>
            {' '}
            {this.props.photo.isEditable
              ? 'Si elimina todos sus avances se perderán'
              : null}
          </p>
        </Alert>
      );
    };

    return (
      <div className="pt-button-group pt-large pt-fill">
        <Button iconName={isEditableIcon} className={isEditableColor} />

        <Popover
          content={menu()}
          interactionKind={PopoverInteractionKind.CLICK}
          isOpenMenu={this.state.isOpenMenu}
          position={Position.RIGHT}
          useSmartPositioning={true}
        >
          <Button
            iconName={`${IconClasses.MENU} `}
            onClick={this.onclickToggleMenu}
          />

        </Popover>
        {alert()}
      </div>
    );
  }
}

function PhotoItem({ photo }) {
  return (
    <div className="pt-card pt-elevation-3">
      <ImageOptions photo={photo} />
      <img src={photo.url} />
    </div>
  );
}

function UploadPhoto() {
  function onclickUploadPhoto() {
    alert();
  }

  return (
    <div
      className="uploadPhoto pt-card pt-elevation-3"
      onClick={onclickUploadPhoto}
    >
      <input type="file" />
      Seleccione aqui su archivo
    </div>
  );
}
